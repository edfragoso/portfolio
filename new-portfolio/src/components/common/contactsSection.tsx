"use client";
import { TitleComp } from "../atoms/TitleComp";
import { DiscordContact } from "../atoms/discordContact";
import EmailContact from "../atoms/emailContact";
import { GithubContact } from "../atoms/githubContact";
import { LinkedInContact } from "../atoms/linkedInContact";
import { ContactForm } from "./contactForm";

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
            tiver outro pedido ou pergunta, não hesite em contactar-me.
          </p>
          <div>
            <ContactForm/>
          </div>
        </BoxText>
        <BoxLinks>
          <DiscordContact personId={"fragoso6125"} />
          <EmailContact />
         <GithubContact profileName={"github"}/>
          <LinkedInContact profileName={"ednilsonfragoso"} />
        </BoxLinks>
      </BoxContainer>
    </BoxContacts>
  );
}
