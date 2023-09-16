import styled from "styled-components";

interface MenuProps {

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

export const NavLink = styled.a`
  margin: 0.5rem;
  color: #abb2bf;
  text-decoration: none;

  span {
    color: #c778dd;
    margin: 0.3rem;
  }
  &:hover {
    color: #FFFFFF;
  }
`;
