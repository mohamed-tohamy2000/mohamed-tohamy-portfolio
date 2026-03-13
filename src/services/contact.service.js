import { personalData } from "../data/personal.data";

function normalizeWhatsAppPhone(phone) {
  return phone.replace(/\D/g, "");
}

export async function submitContactForm(values) {
  const phone = normalizeWhatsAppPhone(personalData.phone);

  if (!phone) {
    throw new Error("WhatsApp phone number is missing");
  }

  const message = [
    "New Portfolio Contact",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Message: ${values.message}`,
  ].join("\n");

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const popup = window.open(url, "_blank", "noopener,noreferrer");

  if (!popup) {
    window.location.href = url;
  }

  return {
    success: true,
    data: values,
  };
}
