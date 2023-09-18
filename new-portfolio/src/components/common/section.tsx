"use client";
import euBunito from "../../../public/euBunito.png";
import { Rectangle } from "../icons/Rectangle";
import {
  SectionContent,
  LeftBox,
  RightBox,
  StatusBox,
} from "../styles/sectionStyle";
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
        <p>"Codeando o Futuro, Lado a Lado: Desenvolvedor Full Stack"</p>
      </LeftBox>
      <RightBox>
        <Image
        priority
          src={euBunito}
          alt={"imageDev"}
          width={280}
          height={200}
          style={{
         /*  border: "outset 3px var(--second-color)",  */
        /*   borderRadius: "5px 60px 60px 5px", */
        /*  boxShadow: " 0px 0px 30px 10px rgba(0, 0, 0, 0.3)", */
           
          }}
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
