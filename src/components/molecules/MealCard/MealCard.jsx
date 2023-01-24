import React from "react";
import { ImageMeal } from "../../atoms/ImageMeal/ImageMeal";
import { StyledMealCard } from "./styles";
import { Text } from "../../atoms/Text/Text";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CancelIcon from '@mui/icons-material/Cancel';


export const MealCard = ({value}) => {
    return(
        <StyledMealCard>
            <ImageMeal src={value.picture}></ImageMeal>
            <Text>{value.name}</Text>
            <CancelIcon></CancelIcon>
            <ModeEditIcon></ModeEditIcon>
        </StyledMealCard>
    )
}