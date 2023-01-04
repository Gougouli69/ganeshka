import React from "react";
import { ImageMeal } from "../../atoms/ImageMeal/ImageMeal";
import { StyledMealCard } from "./styles";
import { Text } from "../../atoms/Text/Text";


export const MealCard = ({value}) => {
    return(
        <StyledMealCard>
            <ImageMeal src={value.picture}></ImageMeal>
            <Text>{value.name}</Text>
        </StyledMealCard>
    )
}