"use client"
import { Quote } from "@/components/atoms/quote";
import { Section } from "@/components/common/section";
import { DefaultPageLayout } from "@/components/styles/DefaultPageLayout";


export default function Home() {
  return (
    <DefaultPageLayout>
      <Section/>
      <Quote/>
    </DefaultPageLayout>
  );
}
