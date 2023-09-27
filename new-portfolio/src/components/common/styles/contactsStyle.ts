import styled from "styled-components";

export const BoxContacts = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
  justify-content: space-around;
 
`;

export const BoxContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
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

  @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
    width: 100%;
    margin-top: 3rem;
  }
`;

export const BoxLinks = styled.div`
  border: solid 1px var(--second-color);
  box-shadow: 0px 0px 15px 5px rgba(255, 255, 255, 0.15);
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;
`;
