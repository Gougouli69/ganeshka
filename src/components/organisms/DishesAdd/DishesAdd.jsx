import React from "react";
import { TextField, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Text } from "../../atoms/Text/Text";
import { RxCross2 } from "react-icons/rx";
import "./style.css";


export const DishesAdd = () => {
    let data = ['2 oeufs', '100g de pattes', '15 Courgettes'];
    let i = 0;
    return(
        <>
            <p className="title">Création d'un plat</p>
            <div className="flex-zone">
                <TextField placeholder='Nom du plat'></TextField>
                <IconButton color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                </IconButton>
            </div>
            <div className="composition-zone">
                <p className="title">Composition :</p>
                <Button variant="contained">Ajouter</Button>
            </div>
                {
                    data.map(element => {
                        return <><p className="ingredient" key={i++}><a><RxCross2></RxCross2></a> {element} </p></>
                    })
                }
            <p className="title"> Recette : </p>
            <div className="flex-zone">
                <TextField placeholder='Pour commencer ...'></TextField>
                <Button className='createDish' variant="contained">Créer le plat</Button>
            </div>
        </>
    )
}