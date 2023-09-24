import React from "react";
import { SubButtom } from "./styles/styleSubmitButton";


type SubmitButton = {
  title: string;
};

export interface SubmitButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
}

export const SubmitButton = ({ title, onClick }: SubmitButtonProps) => {
  return <SubButtom type="submit" onClick={onClick}>{title}</SubButtom>;
};
