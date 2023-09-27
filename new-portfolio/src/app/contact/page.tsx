"use client";
import { SubmitButton } from "@/components/atoms/SubmitButton";
import { DiscordContact } from "@/components/atoms/discordContact";
import EmailContact from "@/components/atoms/emailContact";
import { LinkedInContact } from "@/components/atoms/linkedInContact";
import WhatsappLink from "@/components/atoms/wattsApp";
import { BoxLinks } from "@/components/common/styles/contactsStyle";
import styled from "styled-components";

const Temp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 200px;
  h1 {
    color: var(--text-color);
  }
`;

export default function Contact() {
  return (
    <Temp>
      <p>🎯</p>
      <h1>🚧 - Pagina Contatos - 🚧</h1>
      <h3>🚧 - Em obras - 🚧</h3>
      <SubmitButton title={"voltar"} navigate={"/"} />
      <BoxLinks>
        <DiscordContact personId={"fragoso6125"} />
        <EmailContact />
        <LinkedInContact profileName={"/in/ednilsonfragoso"} />
        <WhatsappLink title={"Envie uma mensagem agora"} />
      </BoxLinks>
    </Temp>
  );
}
