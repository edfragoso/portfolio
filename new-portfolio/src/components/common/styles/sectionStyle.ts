import styled from "styled-components";

export const SectionContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;
  width: 100%;

  @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
    align-items: center;
    flex-direction: column;
    margin-top: 3rem;
  }
`;

export const LeftBox = styled.article`
  display: flex;
  flex-direction: column;
  width: 50%;
  

  h1 {
    font-size: 30px;
    color: var(--text-color);
    margin-bottom: 3rem;
    text-shadow: 2px 8px 8px rgba(0, 0, 0, 0.5);
  }
  span {
    margin: 0.5rem;
    color: var(--primary-color);
    text-shadow: 2px 8px 8px rgba(0, 0, 0, 0.5);
   
  }
  p {
    text-align: center;
    font-size: 15px;
    text-align: left;
    color: var(--second-color);
    margin-bottom: 20px;
  }

  @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
    width: 100%;
    flex-direction: column;
    margin-top: 10px;
    align-items: center;

    h1 {
      font-size: 20px;
      text-align: start;
    }
    p {
      justify-content: center;
      text-align: center;

      @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
        margin-top: 2px;
      }
    }
  }
`;

export const RightBox = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;

  @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
    width: 80%;
  }
`;

export const StatusBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
  gap: 0.3rem;
  font-size: 16px;
  font-weight: 200;
  color: var(--second-color);
  border: solid 1px var(--second-color);
  padding: 0.5rem;

  span {
    margin-left: 0.3rem;
    color: var(--text-color);
    font-weight: 400;
  }
  p {
    font-size: 14px;
  }

  @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
    display: flex;
    align-items: center;
    width: 100%;
    p {
      font-size: 12px;
    }
  }
`;
