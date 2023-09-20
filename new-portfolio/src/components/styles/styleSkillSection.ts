import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  
  /*  border: solid 1px green; */
  @media (max-width: 768px) {
  }
`;

export const TitleContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-bottom: 20px;
`;

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  /*  flex: 1 0 140px; */
  align-items: center;
  flex-direction: row-reverse;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  /*  border: solid 1px blue; */

  h3 {
    font-weight: 600;
    color: var(--text-color);
    margin: 0 10px 40px;
  }
  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const RightBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 0;

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
    font-weight: 300;
  }
  /* flex-direction: column; */
  /*  border: 1px solid red; */
  /* @media (min-width: 768px) {
    width: 60%;
    flex-direction: row;
    align-items: flex-start;
    align-self: flex-start;
  } */
`;

export const BoxSkill = styled.div`
  display: flex;
  flex-direction: column;
  /* flex: 0 0 calc(43.333% - 10px); */
  flex: 0 10px 140px;
  border: solid 0.5px var(--second-color);
  color: var(--second-color);
  text-align: start;
  margin: 5px;
  padding: 0.2rem;
`;
