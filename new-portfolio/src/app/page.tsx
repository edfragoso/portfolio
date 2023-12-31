'use client'
import { Quote } from "@/components/atoms/quote";
import { About } from "@/components/common/aboutSection";
import { Contacts } from "@/components/common/contactsSection";
import { Footer } from "@/components/common/footer";
import { ProjectSection } from "@/components/common/projectSection";
import { Section } from "@/components/common/section";
import { SkillSection } from "@/components/common/skillSection";
import { DefaultPageLayout } from "@/components/common/styles/DefaultPageLayout";

export default function Home() {
  return (
    <DefaultPageLayout>
      <Section />
      <Quote />
      <ProjectSection />
      <SkillSection />
      <About />
      <Contacts />
      <Footer />
    </DefaultPageLayout>
  );
}
