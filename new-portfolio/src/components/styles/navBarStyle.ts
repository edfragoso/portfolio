import styled from "styled-components";

interface MenuProps {}

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

export const NavLink = styled.a`
  color: var(--second-color);
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  
  &:hover {
    color: #ffffff;    
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  span {
    color: #c778dd;
    margin: 0.3rem;
  }
`;
