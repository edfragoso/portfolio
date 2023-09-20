import { TitleComponent } from "../atoms/title";
import {
  BoxContainer,
  BoxSkill,
  Container,
  LeftBox,
  RightBox,
  TitleContent,
} from "../styles/styleSectionSkills";
import { LogoIcon } from "../icons/logoIcon";


export function SkillSection() {
  return (
    <Container>
      <TitleContent>
        <TitleComponent title={"skills"} markers={"#"} />
      </TitleContent>

      <BoxContainer>
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
            <p></p>
          </BoxSkill>
          <BoxSkill>
            <h4>Frameworks</h4>
            <p>Express</p>
            <p>Nextjs</p>
            <p>Nest</p>
          </BoxSkill>
          <BoxSkill>
            <h4>Bibliotecas</h4>
            <p>React</p>
            <p>Prisma</p>
            <p>Axios</p>
          </BoxSkill>
        </RightBox>
      </BoxContainer>
    </Container>
  );
}