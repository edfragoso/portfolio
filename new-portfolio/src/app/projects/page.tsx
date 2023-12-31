'use client'
import { NavigateButton } from "@/components/atoms/navigateButton";
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
      <NavigateButton title={"voltar"} navigate={"/"}/>
    </Temp>
  );
}
