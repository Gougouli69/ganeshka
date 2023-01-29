import React from "react";
import { MealCard } from "../../molecules/MealCard/MealCard";
import { Button } from '@mui/material';
import './style.css';
import { useNavigate } from "react-router-dom";


export const DishesList = ({dishes, addbutton}) => {
    let navigate = useNavigate(); 
    return (
        <>
            {addbutton ? <Button className='addDish' onClick={() => navigate('/add-dishes') } variant="contained">Ajouter un repas</Button> : ''}
            
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