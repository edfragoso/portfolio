import React from "react";
import { ContactsList } from "./styles/styleContactsLinks";
import { LinkdinIcon } from "../icons/linkedinIcon";
import { GithubIcon } from "../icons/githubIcon";

const GithubContact = () => {
  const personLink = "https://github.com/edfragoso";
  const profileName = "github.com/edfragoso"
  return (
    <ContactsList>
      <a href={personLink}>
        <i>
          <GithubIcon/>
          {profileName}
        </i>
      </a>
    </ContactsList>
  );
};

export default GithubContact;