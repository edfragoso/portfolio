'use client'
import React from "react";
import { ContactsList } from "./styles/styleContactsLinks";
import { GithubIcon } from "../icons/githubIcon";

interface GithubContactProps {
  profileName?: string;
}
export function GithubContact({ profileName }: GithubContactProps) {
  const Link = "https://github.com/edfragoso";
  return (
    <ContactsList>
      <a href={Link}>
        <i>
          <GithubIcon />
          <p>{profileName}</p>
        </i>
      </a>
    </ContactsList>
  );
}
