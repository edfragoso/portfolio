"use client"
import { Quote } from "@/components/atoms/quote";
import { ProjectSection } from "@/components/common/projectSection";
import { Section } from "@/components/common/section";
import { SkillSection } from "@/components/common/skillSection";
import { DefaultPageLayout } from "@/components/styles/DefaultPageLayout";


export default function Home() {
  return (
    <DefaultPageLayout>
      <Section/>
      <Quote/>
      <ProjectSection/>
      <SkillSection/>
    </DefaultPageLayout>
  );
}
