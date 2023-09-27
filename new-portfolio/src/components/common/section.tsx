'use client'
import euBunito from "../../../public/euBunito.png";
import { SubmitButton } from "../atoms/SubmitButton";
import { Rectangle } from "../icons/Rectangle";
import {
  SectionContent,
  LeftBox,
  RightBox,
  StatusBox,
} from "./styles/sectionStyle";
import Image from "next/image";

export function Section() {
  return (
    <SectionContent>
      <LeftBox>
        <h1>
          Ednilson<span>desenvolvedor</span>
          <br />
          full-stack
        </h1>
        <p>Codeando o Futuro, Lado a Lado: Desenvolvedor Full Stack.</p>
        <SubmitButton title={"Entre em contato"} navigate={"/contact"} />
      </LeftBox>
      <RightBox>
        <Image
          priority
          src={euBunito}
          alt={"imageDev"}
          width={340}
          height={undefined}
        />

        <StatusBox>
          <Rectangle />
          <p>
            Atualmente trabalhando em <span>Portfólio.</span>
          </p>
        </StatusBox>
      </RightBox>
    </SectionContent>
  );
}
