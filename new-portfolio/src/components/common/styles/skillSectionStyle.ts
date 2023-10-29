import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 5rem;
  justify-content: space-around;

  @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
    margin-top: 3rem;
  }
`;

export const LeftBox = styled.article`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: center;
  padding: 1rem;

  h3 {
    font-size: 24px;
    text-align: center;
    font-weight: 600;
    color: var(--text-color);
    margin-right: 2rem;
    text-shadow: 2px 8px 8px rgba(0, 0, 0, 0.5);
  }
  p {
    font-size: 18px;
    font-weight: 300;
    padding: 0.2rem;
    border: 1px solid var(--second-color);
    margin: 0.3rem;
    color: var(--second-color);
  }
`;

export const RightBox = styled.article`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 60%;
  margin: 2rem;

  h4 {
    text-align: center;
    color: var(--text-color);
    font-size: 16px;
    font-weight: 600;
    padding: 0.2rem;
    border-bottom: 1px solid var(--second-color);
    margin-bottom: 5px;
  }
  p {
    padding: 0.1rem;
    font-size: 16px;
    font-weight: 300;
    @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
      font-size: 18px;
    }
  }

  @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
    justify-content: center;
    width: 100%;
  }
`;

export const BoxSkill = styled.article`
  display: flex;
  flex-direction: column;
  border: solid 0.5px var(--second-color);
  color: var(--second-color);
  text-align: start;
  margin: 0.3rem;
  padding: 0.2rem;
  flex-grow: 1;

  @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
    flex: 0 10px 140px;
    margin: 0.5rem;
  }
`;

export const MyFunFacts = styled.article`
  width: 30%;
  display: flex;
  flex-wrap: wrap;

  
  /* p{
    color: var(--second-color);
    font-weight: 300;
    border: solid 1px var(--second-color);
    margin: 3px;
    padding: 0.3rem;
  } */

  @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
    flex-grow: 1;
  }
`;

export const StyleDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: var(--second-color);
  font-weight: 300;
  border: solid 1px var(--second-color);
  margin: 3px;
  padding: 0.3rem;

  @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
    flex-grow: 1;
  }
`;
