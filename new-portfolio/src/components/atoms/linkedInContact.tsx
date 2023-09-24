'use client'
import React from "react";
import { ContactsList } from "./styles/styleContactsLinks";
import { LinkdinIcon } from "../icons/linkedinIcon";

interface LinkedInContactProps {
  profileName?: string;
}

export function LinkedInContact({ profileName }: LinkedInContactProps) {
  const personLinkedin = "https://linkedin.com/in/ednilsonfragoso";

  return (
    <ContactsList>
      <a href={personLinkedin} target="_blank">
        <i>
          <LinkdinIcon />
          <p>{profileName}</p>
        </i>
      </a>
    </ContactsList>
  );
}
