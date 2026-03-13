import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string().min(2, "Name is too short").required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message should be at least 10 characters")
    .required("Message is required"),
});

