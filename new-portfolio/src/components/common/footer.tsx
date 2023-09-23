"use client";
import { DiscordContact } from "../atoms/discordContact";
import { GithubContact } from "../atoms/githubContact";
import { LinkedInContact } from "../atoms/linkedInContact";
import { Logo } from "../icons/logoEdCode";
import { Content, BoxLeft, BoxRight, FooterContent } from "./styles/styleFooter";

export function Footer() {
  return (
    <Content>
      <FooterContent>
      <BoxLeft>
        <Logo />
        <p>Desenvolvedor full-stack</p>
      </BoxLeft>
        <BoxRight>
          <h3>Media</h3>
          <div>
            <GithubContact profileName={""} />
            <DiscordContact personId={""} />
            <LinkedInContact profileName="" />
          </div>
        </BoxRight>
      </FooterContent>
      <p>&copy; 2023 {"<edCode/>"} Todos direitos reservados</p>
    </Content>
  );
}
