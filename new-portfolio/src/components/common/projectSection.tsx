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




export function ProjectSection() {
   
  return (
    <Container>
      <HeaderContent>
        <BoxTitle>
          <span>#</span>
          <p>projetos</p>
          <HorizontalLine/>
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
