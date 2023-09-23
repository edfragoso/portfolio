"use client"
import { TitleComp } from "../atoms/TitleComp";
import {DiscordContact} from "../atoms/discordContact";
import EmailContact from "../atoms/emailContact";
import {LinkedInContact} from "../atoms/linkedInContact";
import WhatsappLink from "../atoms/wattsApp";

import {
  BoxContacts,
  BoxContainer,
  BoxLinks,
  BoxText,
} from "./styles/contactsStyle";

export function Contacts() {
  return (
    <BoxContacts>
      <TitleComp title={"contatos"} markers={"#"} />
      <BoxContainer>
        <BoxText>
          <p>
            Estou interessado em oportunidades freelance. No entanto, se você
            tiver outro pedido ou pergunta, não hesite em contactar-me
          </p>
        </BoxText>
        <BoxLinks>
          <DiscordContact personId={"fragoso6125"}/>
          <EmailContact />
          <LinkedInContact profileName={"linkedin.com/in/ednilsonfragoso"}/>
          <WhatsappLink title={"Envie uma mensagem agora"}/>
        </BoxLinks>
      </BoxContainer>
    </BoxContacts>
  );
}
