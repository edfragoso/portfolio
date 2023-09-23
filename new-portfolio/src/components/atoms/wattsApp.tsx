"use client";
import { WhatsAppIcon } from "../icons/whatsappIcon";
import { ContactsList } from "./styles/styleContactsLinks";

interface WhatsappLinkProps {
    title: string
} 
const WhatsappLink = ({title}: WhatsappLinkProps) => {
  const phoneNumber = "5551994260927";
  const message = "Olá, encontrei seu contato pelo seu portifólio...";

  return (
    <ContactsList>
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      >
        <i>
        <WhatsAppIcon/>
        {title}
        </i> 
    </a>
    </ContactsList>
  );
};

export default WhatsappLink;
