import PageWrapper from "../components/common/PageWrapper";
import HeroSection from "../sections/home/HeroSection";
import SkillsSection from "../sections/home/SkillsSection";
import FeaturedProjectsSection from "../sections/home/FeaturedProjectsSection";
import CTASection from "../sections/home/CTASection";

export default function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <CTASection />
    </PageWrapper>
  );
}

