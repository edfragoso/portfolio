import React from "react";
import { ContactsList } from "./styles/styleContactsLinks";
import { DiscordIcon } from "../icons/discordIcon";

const DiscordContact = () => {
  const personId = "fragoso6125";
  const link = "https://discord.com";

  return (
    <ContactsList>
      <a href={link}>
        <i>
          <DiscordIcon/>
          {personId}
        </i>
      </a>
    </ContactsList>
  );
};

export default DiscordContact;
