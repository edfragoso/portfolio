import { TitleComp } from "../atoms/TitleComp";
import DiscordContact from "../atoms/discordContact";
import EmailContact from "../atoms/emailContact";
import GithubContact from "../atoms/githubContact";
import LinkedInContact from "../atoms/linkedInContact";
import { DiscordIcon } from "../icons/discordIcon";
import { EmailIcon } from "../icons/emailIcon";
import { GithubIcon } from "../icons/githubIcon";
import { LinkdinIcon } from "../icons/linkedinIcon";
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
          <DiscordContact />
          <EmailContact />
          <LinkedInContact />
          <GithubContact/>
        </BoxLinks>
      </BoxContainer>
    </BoxContacts>
  );
}
