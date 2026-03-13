import Container from "../../components/ui/Container";

export default function ContactIntro() {
  return (
    <section className="section-space pb-8">
      <Container>
        <p className="mb-2 text-xs uppercase tracking-[0.35em] text-primary">
          Contact
        </p>
        <h1 className="text-4xl font-bold text-base-content md:text-5xl">
          Let&apos;s Work Together
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-base-content/65 md:text-base">
          If you have a project idea or need a scalable frontend UI, send me a message through
          the form or by using the contact details.
        </p>
      </Container>
    </section>
  );
}


