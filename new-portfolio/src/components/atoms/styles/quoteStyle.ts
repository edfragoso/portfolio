import styled from "styled-components";

export const BoxContent = styled.section`
  margin-top: 5rem;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 

  @media (max-width: ${(props) => props.theme.desktopBreakpoint}) {
    margin-top: 3rem;
  }
`;

export const MarksLeft = styled.span`
  background: transparent;
  position: relative;
  top: -25px;
  left: 4px;

  @media (max-width: ${(props) => props.theme.desktopBreakpoint}) {
    top: -40px;
    left: 4px;
  }
`;

export const TextBox = styled.div`
  border: solid 0.5px var(--second-color);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  padding: 15px 0;
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  color: var(--second-color);
  font-style: italic;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: ${(props) => props.theme.desktopBreakpoint}) {
    font-size: 12px;
    font-weight: 100;
  }
`;

export const MarksRight = styled.span`
  background: transparent;
  position: relative;
  top: 30px;
  right: 5px;


  @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
    top: 45px;
    right: 3px;
  }
`;

export const BoxAuthor = styled.div`
  border: solid 0.5px var(--second-color);
  color: var(--second-color);
  position: relative;
  text-align: center;
  padding: 0 8px;
  right: -240px;
  top: 0px;
  font-size: 14px;
  font-weight: 400;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);

  @media (max-width: ${(props) => props.theme.tableBreakpoint}) {
    right: -50px;
    font-size: 12px;
  }
`;
