"use client";
import Image from "next/image";
import otherEu from "../../../public/otherEu.png";
import { Footer } from "@/components/common/footer";
import { TitleComp } from "@/components/atoms/TitleComp";
import { DefaultPageLayout } from "@/components/common/styles/DefaultPageLayout";
import {
  BoxAbout,
  BoxContainer,
  BoxImg,
  BoxText,
} from "@/components/common/styles/aboutSectionStyle";
import Skills from "@/components/atoms/skills";
import FunFacts from "@/components/atoms/funFacts";

export default function About() {
  return (
    <DefaultPageLayout>
      <BoxAbout>
        <TitleComp title={"sobre"} markers={"#"} />
        <BoxContainer>
          <BoxText>
            <p>Olá, sou Ednilson!</p>
            <p>
              Sou um desenvolvedor full-stack, natural do estado do Rio Grande
              do Sul, com expertise tanto em front-end quanto em back-end. Minha
              jornada na área de desenvolvimento web começou há mais de um ano,
              e desde então, tenho trazido meu conhecimento autodidata para
              criar websites e aplicações responsivos a partir do zero.
            </p>
            <p>
              Minha paixão por transformar criatividade e conhecimento em
              experiências web modernas e altamente usáveis é o que me motiva a
              continuar buscando a excelência. Sempre me esforço para estar
              atualizado com as tecnologias mais recentes e estruturas
              inovadoras, garantindo que cada projeto seja construído com as
              melhores práticas e as soluções mais atuais do mercado.
            </p>
            <p>
              Minha missão é oferecer soluções web de alta qualidade que não
              apenas atendam, mas também superem as expectativas dos meus
              clientes. Estou entusiasmado para enfrentar novos desafios e
              colaborar em projetos empolgantes que me permitam aplicar minha
              experiência e paixão pela web, proporcionando resultados
              excepcionais.
            </p>
          </BoxText>

          <BoxImg>
            <Image priority src={otherEu} alt={"eu"} width={280} height={300} />
          </BoxImg>
        </BoxContainer>
      </BoxAbout>

      <TitleComp title={"dominios"} markers={"#"} />
      <Skills />

      <TitleComp title={"curiosidades"} markers={"#"} />
      <FunFacts />

      <Footer />
    </DefaultPageLayout>
  );
}
