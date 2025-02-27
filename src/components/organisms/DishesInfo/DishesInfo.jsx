import React from "react";
import { MealCard } from "../../molecules/MealCard/MealCard";
import { Button } from '@mui/material';
import './style.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { ImageMeal } from "../../atoms/ImageMeal/ImageMeal";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CancelIcon from '@mui/icons-material/Cancel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";


export const DishesInfo = ({id}) => {
    const [dishes, setDishes] = useState([]);
    const navigate = useNavigate(); 

    let config = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    };

    function getInfoMeal(id){
        axios.get(
            'https://urzggw0p.directus.app/items/Meal/'+id, 
            config
        ).then(
            (response) => {
                setDishes(response?.data?.data);
            }
        ).finally(() =>{
            
        });
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleCloseDelete = () => {
        let config = {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        };

        axios.delete(
            'https://urzggw0p.directus.app/items/Meal/'+dishes.id, 
            config
        ).then(
            (response) => {
            }
        ).finally(() =>{
            setOpen(false);
            navigate('/');
        });
    }

    useEffect(() => {
        getInfoMeal(id);
      });

    return (
        <>
            <CancelIcon onClick={handleClickOpen}></CancelIcon>
            <ModeEditIcon onClick={() =>  navigate('/edit-dishes/'+dishes.id)}></ModeEditIcon>
            <p>Nom du plat : {dishes.name}</p>
            <ImageMeal src={dishes.picture}></ImageMeal>
            <p>Description : {dishes.Description}</p>

            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Voulez-vous vraiment supprimer ce plat ?"}
            </DialogTitle>
            <DialogActions>
                <Button onClick={handleClose}>Annnuler</Button>
                <Button color='error' onClick={handleCloseDelete} autoFocus>
                    Supprimer
                </Button>
            </DialogActions>
        </Dialog>
        </>
    )
}