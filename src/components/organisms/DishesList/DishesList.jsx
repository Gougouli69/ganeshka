import React from "react";
import { MealCard } from "../../molecules/MealCard/MealCard";

export const DishesList = ({dishes}) => {
    console.log("dishes", dishes)
    let i = 0;
    return (
        <>
            {
                dishes.map(element => {
                    return <MealCard key={element.id} nameDish={element.name}></MealCard>
                })
            }
        </>
    )
}