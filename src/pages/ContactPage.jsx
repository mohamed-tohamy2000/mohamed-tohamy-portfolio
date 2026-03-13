import PageWrapper from "../components/common/PageWrapper";
import PanelSection from "../components/ui/PanelSection";
import ContactIntro from "../sections/contact/ContactIntro";
import ContactFormSection from "../sections/contact/ContactFormSection";
import ContactInfoCard from "../sections/contact/ContactInfoCard";

export default function ContactPage() {
  return (
    <PageWrapper>
      <ContactIntro />

      <PanelSection sectionClassName="pb-16 pt-0 md:pb-24" panelClassName="p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <ContactFormSection />
          <ContactInfoCard />
        </div>
      </PanelSection>
    </PageWrapper>
  );
}
