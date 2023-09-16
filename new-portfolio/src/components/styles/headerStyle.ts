import styled, { keyframes } from "styled-components";

interface MenuProps {
  $show: boolean;
}

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  
  @media (max-width: 760px) {
    width: auto;
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const LogoContent = styled.div`
  display: flex;
  
`;

export const MenuStyle = styled.div<MenuProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: -25px 0 20px;
  
  @media (min-width: 768px) {
    display: ${({ $show }) => (!$show ? "flex" : "none")};  
  }
`;

const slideInAnimation = keyframes`
  from {
    transform: translateX(-100%); 
  }
  to {
    transform: translateX(0); 
  }
`;


export const MenuItems = styled.div<MenuProps>`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 20px;
  animation: ${({ $show }) => (!$show ? slideInAnimation : "none")} 0.4s ease-in-out;
  
  @media (max-width: 760px) {
    display: ${({ $show }) => (!$show ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    
  }
`;


