import React from "react";
import { StyledImageMeal } from "./styles";

export const ImageMeal = ({src}) => {
    return(
        //<StyledImageMeal src={process.env.REACT_APP_API_BASE_URL+'/assets/'+src} alt="image">
        <StyledImageMeal src={'https://urzggw0p.directus.app/assets/'+src} alt="image">
        </StyledImageMeal>
    ) 
}