import React from "react";
import { ImageMeal } from "../../atoms/ImageMeal/ImageMeal";
import { StyledMealCard } from "./styles";
import { Text } from "../../atoms/Text/Text";

import { useNavigate } from "react-router-dom";


export const MealCard = ({value}) => {
    const navigate = useNavigate(); 
    return(
        <div>
        <StyledMealCard onClick={() => navigate('/info-dishes/'+value.id)}>
            <ImageMeal src={value.picture}></ImageMeal>
            <Text margin={0}>{value.name}</Text>

        </StyledMealCard>
        </div>
    )
}