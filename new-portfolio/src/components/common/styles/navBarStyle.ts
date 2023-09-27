import styled from "styled-components";

interface MenuProps {
  isActive: boolean;
}

export const MenuItens = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
    align-items: self-start;
  }
`;

export const NavLink = styled.div<MenuProps>`
  a {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => (props.isActive ? "#fff" : "var(--second-color)")};
    border-bottom: 2px solid
      ${(props) => (props.isActive ? "var(--primary-color)" : "none")};
    text-decoration: none;
    text-shadow: ${(props) => (!props.isActive ? "2px 8px 8px rgba(0, 0, 0, 0.9)" : "none")};
    
    /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5) */;
    &:hover {
      color: #ffffff;
      text-shadow: none;
    }
  }

  @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
    font-size: 22px;
  }

  span {
    color: #c778dd;
    margin: 0.1rem;
  }
`;
