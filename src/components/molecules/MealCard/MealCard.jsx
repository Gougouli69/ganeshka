import React from "react";
import { ImageMeal } from "../../atoms/ImageMeal/ImageMeal";
import { StyledMealCard } from "./styles";
import { Text } from "../../atoms/Text/Text";


export const MealCard = (props) => {
    return(
        <StyledMealCard>
            <ImageMeal></ImageMeal>
            <Text>{props.nameDish}</Text>
        </StyledMealCard>
    )
}