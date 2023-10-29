import {
    BoxSkill,
    Container,
    MyFunFacts,
    RightBox,
    StyleDiv,
  } from "@/components/common/styles/skillSectionStyle";

export default function Skills() {
  return (
    <Container>
      <RightBox>
        <BoxSkill>
            <h4>Linguagens</h4>
            <p>javaScript</p>
            <p>typescript</p>
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
