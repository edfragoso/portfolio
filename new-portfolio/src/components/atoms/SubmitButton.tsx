import React from "react";
import { SubButtom } from "./styles/styleSubmitButton";
import { useRouter } from "next/navigation";

export interface SubmitButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
}

export const SubmitButton = ({ title, onClick }: SubmitButtonProps) => {
  const router = useRouter();
  const handleNavigate = () => {
  };
  return (
    <SubButtom type="submit" onClick={handleNavigate}>
      {title}
    </SubButtom>
  );
};
