import styled from "styled-components";

export const BoxContent = styled.div`
  margin-top: 150px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const MarksLeft = styled.span`
  background: transparent;
  position: relative;
  top: -25px;
  left: 4px;

  @media (max-width: 760px) {
    top: -40px;
    left: 4px;
  }
`;

export const TextBox = styled.div`
  border: solid 0.5px var(--second-color);
  padding: 15px 0;
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  color: var(--text-color);
  font-style: italic;

  @media (max-width: 760px) {
    font-size: 14px;
  }
`;

export const MarksRight = styled.span`
  background: transparent;
  position: relative;
  top: 30px;
  right: 5px;

  @media (max-width: 760px) {
    top: 50px;
    right: 3px;
  }
`;

export const BoxAuthor = styled.div`
  border: solid 0.5px var(--second-color);
  color: var(--text-color);
  position: relative;
  text-align: center;
  padding: 0 8px;
  right: -240px;
  top: 0px;

  @media (max-width: 760px) {
    right: -50px;
  }
`;
