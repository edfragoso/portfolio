import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 50px;
  
  @media (max-width: 768px) {
    margin-top: 30px;
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
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: center;
  padding: 1rem;
  margin: 10px 10px;

  h3 {
    text-align: center;
    font-weight: 600;
    color: var(--text-color);
    margin: 10px;
  }
  
`;

export const RightBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 60%;
  margin: 10px 10px;
  
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

  @media(max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

export const BoxSkill = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 10px 140px;
  border: solid 0.5px var(--second-color);
  color: var(--second-color);
  text-align: start;
  margin: 5px;
  padding: 0.2rem;

  @media(max-width: 768px) {
    
  }
`;
