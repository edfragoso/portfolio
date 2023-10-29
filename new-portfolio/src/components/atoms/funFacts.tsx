import { LogoIcon } from "../icons/logo";
import {
  Container,
  MyFunFacts,
  StyleDiv,
} from "@/components/common/styles/skillSectionStyle";

export default function FunFacts() {
  return (
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
  );
}
