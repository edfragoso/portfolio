"use client";
import Link from "next/link";
import { HorizontalLine } from "../atoms/horizLine";
import { Card } from "../atoms/card";
import {
  BoxTitle,
  Container,
  HeaderContent,
  Target,
  SectionContent,
} from "../styles/styleProjectSection";
import { TitleComponent } from "../atoms/title";




export function ProjectSection() {
   
  return (
    <Container>
      <HeaderContent>
        <BoxTitle>
        <TitleComponent title={"projetos"} markers={"#"}/>
        </BoxTitle>
        <Target>
          <Link href="/projects">
            Ver todos<span>{" --->"}</span>
          </Link>
        </Target>
      </HeaderContent>
      <SectionContent>
        <Card/>
        <Card/>
        <Card/>
      </SectionContent>
    </Container>
  );
}
