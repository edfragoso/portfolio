"use client";
import Image from "next/image";
import otherEu from "../../../public/otherEu.png";
import { LogoIcon } from "@/components/icons/logo";
import { Footer } from "@/components/common/footer";
import { TitleComp } from "@/components/atoms/TitleComp";
import { DefaultPageLayout } from "@/components/common/styles/DefaultPageLayout";
import {
  BoxAbout,
  BoxContainer,
  BoxImg,
  BoxText,
} from "@/components/common/styles/aboutSectionStyle";
import {
  BoxSkill,
  Container,
  MyFunFacts,
  RightBox,
  StyleDiv,
} from "@/components/common/styles/skillSectionStyle";

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

      <Container>
        <RightBox>
          <BoxSkill>
            <StyleDiv>
              <h4>Linguagens</h4>
              <p>javaScript</p>
              <p>typescript</p>
            </StyleDiv>
          </BoxSkill>
          <BoxSkill>
            <StyleDiv>
              <h4>Bancos de dados</h4>
              <p>postgreSQL</p>
              <p>mongoDB</p>
            </StyleDiv>
          </BoxSkill>
          <BoxSkill>
            <StyleDiv>
              <h4>Outros</h4>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>Styled-components</p>
            </StyleDiv>
          </BoxSkill>
          <BoxSkill>
            <StyleDiv>
              <h4>Ferramentas</h4>
              <p>vsCode</p>
              <p>miro</p>
              <p>figma</p>
            </StyleDiv>
          </BoxSkill>
          <BoxSkill>
            <StyleDiv>
              <h4>Frameworks</h4>
              <p>React</p>
              <p>Next</p>
              <p>Nest</p>
              <p>express</p>
            </StyleDiv>
          </BoxSkill>
        </RightBox>
      </Container>

      <TitleComp title={"curiosidades"} markers={"#"} />

      <Container>
        <MyFunFacts>
          <StyleDiv>
            <p>paixão por esportes radicais</p>
          </StyleDiv>
          <StyleDiv>
            <p>amante da natureza</p>
          </StyleDiv>
          <StyleDiv>
            <p>filosofia, artes e culturas</p>
          </StyleDiv>
          <StyleDiv>
            <p>música</p>
          </StyleDiv>
          <StyleDiv>
            <p>filmes</p>
          </StyleDiv>
          <StyleDiv>
            <p>tecnologias</p>
          </StyleDiv>
        </MyFunFacts>
        <LogoIcon />
      </Container>
      <Footer />
    </DefaultPageLayout>
  );
}
