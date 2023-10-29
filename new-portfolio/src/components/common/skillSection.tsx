"use client";
import { TitleComp } from "../atoms/TitleComp";
import { LogoIcon } from "../icons/logo";
import {
  BoxSkill,
  Container,
  LeftBox,
  RightBox,
} from "./styles/skillSectionStyle";

export function SkillSection() {
  return (
    <Container>
      <TitleComp title={"skills"} markers={"#"} />
        <LeftBox>
          <LogoIcon />
          <h3>Principais habilidades</h3>
        </LeftBox>
        <RightBox>
        <BoxSkill>
          <h4>Linguagens</h4>
          <p>javaScript</p>
          <p>typescript</p>
          <p></p>
        </BoxSkill>
        <BoxSkill>
          <h4>Bancos de dados</h4>
          <p>postgreSQL</p>
          <p>mongoDB</p>
        </BoxSkill>
        <BoxSkill>
          <h4>Outros</h4>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>Styled-components</p>
        </BoxSkill>
        <BoxSkill>
          <h4>Ferramentas</h4>
          <p>vsCode</p>
          <p>miro</p>
          <p>figma</p>
        </BoxSkill>
        <BoxSkill>
          <h4>Frameworks</h4>
          <p>React</p>
          <p>Next</p>
          <p>Nest</p>
          <p>express</p>
        </BoxSkill>
        </RightBox>
    </Container>
  );
}
