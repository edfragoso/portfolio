import React from "react";
import { ContactsList } from "./styles/styleContactsLinks";
import { LinkdinIcon } from "../icons/linkedinIcon";

const LinkedInContact = () => {
  const personLinkedin = "www.linkedin.com/in/ednilsonfragoso";
  const profileName = "linkedin.com/in/ednilsonfragoso"
  return (
    <ContactsList>
      <a href={personLinkedin}>
        <i>
          <LinkdinIcon/>
          {profileName}
        </i>
      </a>
    </ContactsList>
  );
};

export default LinkedInContact;
