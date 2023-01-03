import React from "react";
import { StyledImageMeal } from "./styles";

export const ImageMeal = () => {
    return(
        <StyledImageMeal src={process.env.PUBLIC_URL +"/dist/images/logo.jpg"} alt="image">
        </StyledImageMeal>
    ) 
}