import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row; 
  flex-wrap: wrap;
  width: 100%;
  margin-top: 5rem;
  justify-content: space-around;

  @media (max-width: ${(props) => props.theme.desktopBreakpoint}) {
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
`;

export const RightBox = styled.article`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 50%;
  margin: 2rem;

  h4 {
    text-align: center;
    color: var(--text-color);
    font-size: 14px;
    font-weight: 600;
    padding: 0.2rem;
    border-bottom: 1px solid var(--second-color);
    margin-bottom: 5px;
  }
  p {
    padding: 0.1rem;
    font-size: 12px;
    font-weight: 100;
  }

  @media (max-width: ${(props) => props.theme.desktopBreakpoint}) {
    justify-content: center;
    width: 100%;
  }
`;

export const BoxSkill = styled.article`
  display: flex;
  flex-direction: column;
  flex: 0 10px 40px;
  border: solid 0.5px var(--second-color);
  color: var(--second-color);
  text-align: start;
  margin: 0.3rem;
  padding: 0.2rem;

  @media (max-width: ${(props) => props.theme.desktopBreakpoint}) {
    flex: 0 10px 140px;
    margin: 0.5rem;
  }
`;
