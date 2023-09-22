import styled from "styled-components";

export const BoxContacts = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  justify-content: space-around;
`;

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BoxText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  padding: 1rem;
  color: var(--second-color);

  p {
    font-size: 14px;
    font-weight: 100;
    text-align: justify;
    margin: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BoxLinks = styled.div`
  border: solid 1px var(--second-color);
  padding: 8px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
`;
