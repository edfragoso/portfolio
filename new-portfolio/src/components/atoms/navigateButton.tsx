import React from "react";
import { SubButtom } from "./styles/styleSubmitButton";
import { useRouter } from "next/navigation";

export interface NavigateButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  navigate: string;
}

export const NavigateButton = ({ title, onClick, navigate }: NavigateButtonProps) => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(navigate);
  };
  return (
    <SubButtom type="submit" onClick={handleNavigate}>
      {title}
    </SubButtom>
  );
};
