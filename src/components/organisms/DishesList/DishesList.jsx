import React from "react";
import { MealCard } from "../../molecules/MealCard/MealCard";

export const DishesList = () => {

    let data = ['Victor', 'LeoLeReuf', 'lucas'];
    let i = 0;
    return (
        <>
            {
                data.map(element => {
                    return <MealCard key={i++} nameDish={element}></MealCard>
                })
            }
        </>
    )
}