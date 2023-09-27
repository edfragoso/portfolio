import styled, { keyframes } from "styled-components";

interface MenuProps {
  $show: boolean;
}

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  
  @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const LogoContent = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuStyle = styled.div<MenuProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: -20px;
  
  @media (min-width: ${(props) => props.theme.tableBreakpoint}) {
    display: ${({ $show }) => ($show ? "flex" : "none")};
    margin-top: -20px;
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
  
  
  animation: ${({ $show }) => (!$show ? slideInAnimation : "none")} 0.4s ease-in-out;
  
  @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
    display: ${({ $show }) => (!$show ? "flex" : "none")};
    background-color: var(--bg-primary);
    box-shadow: 10px 5px 20px 5px rgba(0, 0, 0, 0.3);
    border-radius: 0 20px 20px 0;
    align-items: flex-start;
    flex-direction: column;
    position: fixed;
    padding: 1rem;
    width: 200px;
    top: 10%;
    left: 0;

  }
`;


