import styled from "styled-components";

export const BoxAbout = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
`;

export const BoxContainer = styled.article`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;

  @media(max-width: ${(props) => props.theme.tableBreakpoint}) {
    flex-direction:column-reverse;
    justify-content: center;
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
       
    @media(max-width: ${(props) => props.theme.desktopBreakpoint}){
      font-size: 22px;
    }
  }

  @media(max-width: ${(props) => props.theme.desktopBreakpoint}) {
    width: 100%; 
    margin-top: 8rem;
  }
`;

export const BoxImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  /* border-bottom: 1px solid var(--primary-color); */

  @media(max-width: ${(props) => props.theme.desktopBreakpoint}) {
    border-bottom: none;
    align-self: center;
   /*  width: 200px;
    height: 200px; */
    margin-top: 5rem;
    
  }
`;
