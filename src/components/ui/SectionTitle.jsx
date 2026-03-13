export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-2xl">
      {eyebrow ? (
        <p className="mb-2 text-xs uppercase tracking-[0.35em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold text-base-content md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm leading-7 text-base-content/65 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

