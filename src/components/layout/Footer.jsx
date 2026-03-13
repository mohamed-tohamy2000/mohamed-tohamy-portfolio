import { personalData } from "../../data/personal.data";

export default function Footer() {
  return (
    <footer className="mt-14 px-4 pb-8">
      <div className="nav-shell container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-5 text-center md:flex-row md:text-left">
        <p className="text-sm text-base-content/65">
          © {new Date().getFullYear()} {personalData.shortName} — Frontend Developer
        </p>

        <div className="flex items-center gap-4 text-sm text-base-content/75">
          <a href={personalData.github} target="_blank" rel="noreferrer" className="hover:text-primary">
            GitHub
          </a>
          <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">
            LinkedIn
          </a>
          <a href={`mailto:${personalData.email}`} className="hover:text-primary">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}


