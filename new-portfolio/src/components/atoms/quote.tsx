import { Marks } from "../icons/marks";
import {
  BoxAuthor,
  BoxContent,
  MarksLeft,
  MarksRight,
  TextBox,
} from "./styles/quoteStyle";

export function Quote() {
  return (
    <BoxContent>
      <TextBox>
      <MarksLeft>
        <Marks />
      </MarksLeft>
        Tu és composto de três coisas: um corpo precário, um sopro de vida e uma
        inteligência.
      <MarksRight>
        <Marks />
      </MarksRight>
      </TextBox>
        <BoxAuthor>- Marco Aurelio</BoxAuthor>
    </BoxContent>
  );
}
