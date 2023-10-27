import styled from "styled-components";

export const BoxContent = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  padding: 1rem;
  border: 0.5px solid var(--second-color);
  box-shadow: 0px 0px 15px 5px rgba(255, 255, 255, 0.15);
 /*  width: 50%; */
 
 h1{
  font-weight: 600;
  font-size: 24px;
  text-shadow: 2px 8px 8px rgba(0, 0, 0, 0.5);
  color: var(--primary-color);
 }
  
  div{
    display: flex;
    justify-content: space-between;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  /* width: 70%; */
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid var(--second-color);
  background-color: var(--bg-primary);
  color: var(--text-color);
  width: 45%;
  font-size: 18px;
    font-weight: 400;

  &:focus {
    outline: none;
    border-color: var(--second-color);
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.2);
    background-color: #B2ACBF;
   /*  background-color: var(--second-color); */
  }

  &.selected {
    /* border-color: #000; */
  }
`;

export const TextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  margin-top: 1rem;
  background-color: var(--bg-primary);
  border: 1px solid var(--second-color);

  &:focus{
    background-color: var(--second-color);
    color: black;
  }
`;
