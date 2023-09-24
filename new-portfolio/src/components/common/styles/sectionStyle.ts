import styled from "styled-components";

export const SectionContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  width: 100%;

  @media (max-width: ${(props) => props.theme.desktopBreakpoint}) {
    align-items: center;
    flex-direction: column;
    margin-top: 5px;
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
  }
  span {
    margin: 0.5rem;
    color: var(--primary-color);
  }
  p {
    text-align: center;
    font-size: 15px;
    text-align: left;
    color: var(--second-color);
    margin-bottom: 20px;
  }

  @media (max-width: ${(props) => props.theme.desktopBreakpoint}) {
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

      @media (max-width: ${(props) => props.theme.desktopBreakpoint}) {
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

  @media (max-width: ${(props) => props.theme.desktopBreakpoint}) {
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

  @media (max-width: ${(props) => props.theme.desktopBreakpoint}) {
    display: flex;
    align-items: center;
    width: 100%;
    p {
      font-size: 12px;
    }
  }
`;
