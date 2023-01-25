import React from "react";
import { ImageMeal } from "../../atoms/ImageMeal/ImageMeal";
import { StyledMealCard } from "./styles";
import { Text } from "../../atoms/Text/Text";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CancelIcon from '@mui/icons-material/Cancel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button'
import { useState } from "react";
import axios from "axios";



export const MealCard = ({value}) => {

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
            'https://urzggw0p.directus.app/items/Meal/'+value.id, 
            config
        ).then(
            (response) => {
            }
        ).finally(() =>{
            setOpen(false);
        });
    }
    return(
        <div>
        <StyledMealCard>
            <ImageMeal src={value.picture}></ImageMeal>
            <Text>{value.name}</Text>
            <CancelIcon onClick={handleClickOpen}></CancelIcon>
            <ModeEditIcon></ModeEditIcon>
        </StyledMealCard>


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
        </div>
    )
}