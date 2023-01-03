import React from "react";
import { MealCard } from "../../molecules/MealCard/MealCard";

export const DishesList = () => {

    let data = ['Victor', 'LeoLeReuf', 'lucas'];

    return (
        <>
            {
                data.map(element => {
                    return <MealCard nameDish={element}></MealCard>
                })
            }
        </>
    )
}