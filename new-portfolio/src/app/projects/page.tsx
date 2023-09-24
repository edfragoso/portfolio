'use client'
import { SubmitButton } from "@/components/atoms/SubmitButton";
import styled from "styled-components";


const Temp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 200px;
`;



export default function Project({}) {
  return (
    <Temp>
      <h1>🎯 - Pagina Projetos</h1>
      <h3>🚧 - Em obras - 🚧</h3>
      <SubmitButton title={"voltar"} navigate={"/"}/>
    </Temp>
  );
}
