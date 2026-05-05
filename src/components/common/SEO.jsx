import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  defaultSeoImage,
  getCanonicalUrl,
  pageSeo,
  personSchema,
  projectsSchema,
  siteUrl,
  websiteSchema,
} from "../../data/seo.data";

const setMeta = (selector, attribute, value) => {
  if (!value) return;

  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    const nameMatch = selector.match(/\[name="([^"]+)"\]/);
    const propertyMatch = selector.match(/\[property="([^"]+)"\]/);

    if (nameMatch) element.setAttribute("name", nameMatch[1]);
    if (propertyMatch) element.setAttribute("property", propertyMatch[1]);

    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
};

const setLink = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const setJsonLd = (id, schema) => {
  let element = document.getElementById(id);

  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(schema);
};

const getPageSchema = (pathname, title, canonicalUrl) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  url: canonicalUrl,
  isPartOf: {
    "@type": "WebSite",
    name: "Mohamed Tohamy Portfolio",
    url: siteUrl,
  },
  about: {
    "@type": "Person",
    name: "Mohamed Tohamy",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
      ...(pathname === "/"
        ? []
        : [
            {
              "@type": "ListItem",
              position: 2,
              name: title.split("|")[0].trim(),
              item: canonicalUrl,
            },
          ]),
    ],
  },
});

export default function SEO() {
  const { pathname } = useLocation();
  const metadata = pageSeo[pathname];

  useEffect(() => {
    const isKnownPage = Boolean(metadata);
    const title = metadata?.title ?? "Page Not Found | Mohamed Tohamy Portfolio";
    const description =
      metadata?.description ??
      "The requested page could not be found on Mohamed Tohamy's frontend portfolio.";
    const canonicalPath = isKnownPage ? pathname : "/";
    const canonicalUrl = getCanonicalUrl(canonicalPath);
    const robots = isKnownPage ? "index, follow" : "noindex, follow";

    document.documentElement.lang = "en";
    document.title = title;

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="keywords"]', "content", metadata?.keywords);
    setMeta('meta[name="author"]', "content", "Mohamed Tohamy");
    setMeta('meta[name="robots"]', "content", robots);
    setMeta('meta[name="theme-color"]', "content", "#0f172a");
    setLink("canonical", canonicalUrl);

    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[property="og:site_name"]', "content", "Mohamed Tohamy Portfolio");
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:image"]', "content", defaultSeoImage);
    setMeta('meta[property="og:image:alt"]', "content", "Mohamed Tohamy portfolio preview");
    setMeta('meta[property="og:locale"]', "content", "en_US");

    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", defaultSeoImage);

    setJsonLd("person-schema", personSchema);
    setJsonLd("website-schema", websiteSchema);
    setJsonLd("webpage-schema", getPageSchema(canonicalPath, title, canonicalUrl));

    const projectSchemaElement = document.getElementById("projects-schema");
    if (pathname === "/projects") {
      setJsonLd("projects-schema", projectsSchema);
    } else if (projectSchemaElement) {
      projectSchemaElement.remove();
    }
  }, [metadata, pathname]);

  return null;
}
