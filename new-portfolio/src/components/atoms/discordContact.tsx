import React from "react";
import { ContactsList } from "./styles/styleContactsLinks";
import { DiscordIcon } from "../icons/discordIcon";

interface DiscordContactProps {
  personId?: string;
}

export function DiscordContact({personId}: DiscordContactProps) {
 
  const link = "https://discord.com"; 

  return (
    <ContactsList>
      <a href={link} target="_blank">
        <i>
          <DiscordIcon />
          <p>{personId}</p>
          
        </i>
      </a>
    </ContactsList>
  );
};

