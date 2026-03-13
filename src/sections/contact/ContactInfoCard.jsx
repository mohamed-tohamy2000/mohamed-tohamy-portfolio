import { personalData } from "../../data/personal.data";

const contactItems = [
  {
    id: "phone",
    label: "Phone",
    value: personalData.phone,
  },
  {
    id: "email",
    label: "Email",
    value: personalData.email,
    href: `mailto:${personalData.email}`,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "/dev-mohamed-tohamy",
    href: personalData.linkedin,
    target: "_blank",
    rel: "noreferrer",
  },
  {
    id: "location",
    label: "Location",
    value: personalData.location,
  },
];

export default function ContactInfoCard() {
  return (
    <div className="glass-card rounded-[2rem] p-6">
      <h3 className="text-2xl font-bold text-base-content">Contact Info</h3>

      <div className="mt-6 space-y-5">
        {contactItems.map((item) => (
          <div key={item.id}>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">{item.label}</p>
            {item.href ? (
              <a
                href={item.href}
                target={item.target}
                rel={item.rel}
                className="mt-2 block text-base-content/85 hover:text-primary"
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-2 text-base-content/85">{item.value}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
