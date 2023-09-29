import styled from "styled-components";

export const BoxAbout = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
`;

export const BoxContainer = styled.article`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  
  @media(max-width: 760px) {
    flex-direction:column-reverse;
  }
`;

export const BoxText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  padding: 1rem;
  margin-top: 2rem;
  color: var(--second-color);
 
  
  p{
    font-size: 16px;
    font-weight: 300;
    text-align: justify;
    margin-bottom: 2rem;
       
    @media(max-width: ${(props) => props.theme.tableBreakpoint}){
      font-size: 22px;
    }
  }

  @media(max-width: ${(props) => props.theme.tableBreakpoint}) {
    width: 100%; 
  }
`;

export const BoxImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media(max-width: ${(props) => props.theme.tableBreakpoint}) {
    border-bottom: none;
    align-self: center;
    width: 100%;
  }
`;
