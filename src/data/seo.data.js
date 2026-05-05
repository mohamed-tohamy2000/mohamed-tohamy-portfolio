import { personalData } from "./personal.data";
import { projectsData } from "./projects.data";

export const siteUrl = "https://mohamed-tohamy-portfolio.vercel.app";
export const defaultSeoImage = `${siteUrl}/site-cover.png`;

export const pageSeo = {
  "/": {
    title: "Mohamed Tohamy | Frontend Developer in Egypt | React Specialist",
    description:
      "Portfolio of Mohamed Tohamy, a Frontend Engineer and UI Animator building responsive React interfaces, smooth animations, and scalable web experiences.",
    keywords:
      "Mohamed Tohamy, Frontend Developer Egypt, React Developer, Frontend Engineer, UI Animator, JavaScript, Tailwind CSS, Portfolio",
    priority: "1.0",
  },
  "/about": {
    title: "About Mohamed Tohamy | Frontend Engineer & UI Animator",
    description:
      "Learn about Mohamed Tohamy's frontend skills, React experience, tech stack, certifications, languages, and approach to building polished web interfaces.",
    keywords:
      "About Mohamed Tohamy, Frontend Engineer, React, Tailwind CSS, JavaScript, UI Animation, Web Developer Egypt",
    priority: "0.8",
  },
  "/projects": {
    title: "Projects | Mohamed Tohamy Frontend Portfolio",
    description:
      "Explore Mohamed Tohamy's React, Tailwind CSS, dashboard, e-commerce, landing page, and UI animation frontend projects.",
    keywords:
      "Mohamed Tohamy projects, React portfolio projects, Frontend projects, Tailwind CSS projects, Web app projects",
    priority: "0.9",
  },
  "/contact": {
    title: "Contact Mohamed Tohamy | Frontend Developer",
    description:
      "Contact Mohamed Tohamy for freelance frontend development, React interfaces, responsive websites, UI animation, and modern web projects.",
    keywords:
      "Contact Mohamed Tohamy, Hire Frontend Developer, React Developer Egypt, Freelance Frontend Developer",
    priority: "0.7",
  },
};

export const getCanonicalUrl = (pathname = "/") =>
  `${siteUrl}${pathname === "/" ? "/" : pathname}`;

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalData.fullName,
  alternateName: personalData.shortName,
  jobTitle: "Frontend Developer",
  url: siteUrl,
  image: defaultSeoImage,
  email: `mailto:${personalData.email}`,
  telephone: personalData.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cairo",
    addressCountry: "EG",
  },
  sameAs: [personalData.linkedin, personalData.github],
  knowsAbout: [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Frontend Development",
    "UI Animation",
    "Responsive Web Design",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mohamed Tohamy Portfolio",
  url: siteUrl,
  inLanguage: "en",
  author: {
    "@type": "Person",
    name: personalData.shortName,
  },
};

export const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mohamed Tohamy Frontend Projects",
  itemListElement: projectsData.map((project, index) => ({
    "@type": "CreativeWork",
    position: index + 1,
    name: project.title,
    description: project.description,
    image: project.image.startsWith("http")
      ? project.image
      : `${siteUrl}${project.image}`,
    url: project.liveUrl && project.liveUrl !== "#" ? project.liveUrl : siteUrl,
    programmingLanguage: project.stack,
  })),
};
