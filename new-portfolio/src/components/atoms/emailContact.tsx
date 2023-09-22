import React from "react";
import { EmailIcon } from "../icons/emailIcon";
import { ContactsList } from "./styles/styleContactsLinks";

const EmailContact = () => {
  const personEmail = "ednilson.fragoso@hotmail.com";
  const emailLink = `mailto:${personEmail}?subject=Contato&body=Olá, eu gostaria de entrar em contato com você.`;

  return (
    <ContactsList>
      <a href={emailLink}>
        <i>
          <EmailIcon />
          {personEmail}
        </i>
      </a>
    </ContactsList>
  );
};

export default EmailContact;
