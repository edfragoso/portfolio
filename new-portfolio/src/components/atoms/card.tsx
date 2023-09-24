import { SubmitButton } from "./SubmitButton";
import { DescriptionBox, ImgBox, SectionContent, TitleBox } from "./styles/styleCard";




export function Card() {
    return(
        <SectionContent>
            <ImgBox>imgUrl</ImgBox>
            <TitleBox>title</TitleBox>
            <DescriptionBox>description</DescriptionBox>
            <SubmitButton title={"Visitar"} navigate={""}/>
        </SectionContent>
    );
}