"use client";
import Image from "next/image";
import { SubmitButton } from "../atoms/SubmitButton";
import { TitleComp } from "../atoms/TitleComp";
import {
  BoxAbout,
  BoxContainer,
  BoxImg,
  BoxText,
} from "./styles/aboutSectionStyle";
import eu from "../../../public/eu.png";

export function About() {
  return (
    <BoxAbout>
      <TitleComp title={"sobre"} markers={"#"} />
      <BoxContainer>
        <BoxText>
          <p>Olá, sou Ednilson!</p>
          <p>
            Desenvolvedor Full Stack apaixonado por criar sites e aplicações
            envolventes. Transformo ideias em soluções digitais inovadoras.
            Minha jornada autodidata me levou a dominar tanto o front-end quanto
            o back-end. Sempre atualizado com as últimas tecnologias. Pronto
            para construir marcas online e enfrentar desafios.
          </p>
          <p> Vamos tornar suas ideias realidade no mundo digital!</p>
          <SubmitButton title={"Leia mais"} navigate={"/about"} />
        </BoxText>
        <BoxImg>
          <Image priority src={eu} alt={"eu"} width={300} height={undefined} />
        </BoxImg>
      </BoxContainer>
    </BoxAbout>
  );
}
