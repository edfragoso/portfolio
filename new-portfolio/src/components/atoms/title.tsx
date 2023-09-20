"use client"
import { HorizontalLine } from "./horizLine";
import { BoxContent, Marks, Title } from "./styles/styleTitleComp";

interface TitleCompProps {
  title: string;
  markers: string;
}

export function TitleComponent({ title, markers }: TitleCompProps) {
  return (
    <BoxContent>
      <Marks>{markers}</Marks>
      <Title>{title}</Title>
      <HorizontalLine/>
    </BoxContent>
  );
}
