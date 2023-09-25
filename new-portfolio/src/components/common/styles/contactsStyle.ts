import styled from "styled-components";

export const BoxContacts = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  justify-content: space-around;
  margin-bottom: 5rem;
`;

export const BoxContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  @media (max-width: ${(props) => props.theme.desktopBreakpoint}) {
    flex-direction: column;
  }
`;

export const BoxText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 40%;

  color: var(--second-color);

  p {
    font-size: 18px;
    font-weight: 400;
    text-align: justify;
  }

  @media (max-width: ${(props) => props.theme.desktopBreakpoint}) {
    width: 100%;
    margin-top: 3rem;
  }
`;

export const BoxLinks = styled.div`
  border: solid 1px var(--second-color);
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;
`;
