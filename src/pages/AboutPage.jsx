import PageWrapper from "../components/common/PageWrapper";
import AboutHero from "../sections/about/AboutHero";
import TechStackSection from "../sections/about/TechStackSection";
import CertificatesSection from "../sections/about/CertificatesSection";
import LanguagesSection from "../sections/about/LanguagesSection";

export default function AboutPage() {
  return (
    <PageWrapper>
      <AboutHero />
      <TechStackSection />
      <CertificatesSection />
      <LanguagesSection />
    </PageWrapper>
  );
}

