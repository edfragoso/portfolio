'use client';
import Link from "next/link";
import { Card } from "../atoms/card";
import { TitleComp } from "../atoms/TitleComp";
import {
  BoxTitle,
  Container,
  HeaderContent,
  Target,
  SectionContent,
} from "./styles/projectSectionStyle";

export function ProjectSection() {
  return (
    <Container>
      <HeaderContent>
        <BoxTitle>
          <TitleComp title={"projetos"} markers={"#"} />
        </BoxTitle>
        <Target>
          <Link href="/projects">
            Ver todos<span>{" --->"}</span>
          </Link>
        </Target>
      </HeaderContent>
      <SectionContent>
        {/* provisório */}
        <Card />
        <Card />
        <Card />
      </SectionContent>
    </Container>
  );
}
