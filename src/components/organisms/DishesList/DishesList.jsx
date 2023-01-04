import React from "react";
import { MealCard } from "../../molecules/MealCard/MealCard";
import { Button } from '@mui/material';
import './style.css';


export const DishesList = ({dishes}) => {
    return (
        <>
            <Button className='addDish' variant="contained">Ajouter un repas</Button>
            <div className="listDish">
            {
                dishes.map(element => {
                    return <MealCard value={element} key={element.id}></MealCard>
                })
            }
            </div>
        </>
    )
}