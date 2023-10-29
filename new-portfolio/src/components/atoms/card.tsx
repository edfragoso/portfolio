import { NavigateButton } from "./navigateButton";
import { DescriptionBox, ImgBox, SectionContent, TitleBox } from "./styles/styleCard";




export function Card() {
    return(
        <SectionContent>
            <ImgBox>imgUrl</ImgBox>
            <TitleBox>title</TitleBox>
            <DescriptionBox>description</DescriptionBox>
            <NavigateButton title={"Visitar"} navigate={""}/>
        </SectionContent>
    );
}