import React from "react";
import { TextField, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Text } from "../../atoms/Text/Text";
import { RxCross2 } from "react-icons/rx";
import "./style.css";
import axios from "axios";
import { useState } from "react";
class DishesAdd extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            dishName: '',
            recipes: ''
          };
      
          this.handleInputChange = this.handleInputChange.bind(this);          
      }

      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        console.log(event.target.value);
      }

      handleSubmit(event) {
        event.preventDefault();
        let newDishes =[]

        let config = {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        };

        let data = {
                "Description": event.target[3].value,
                "name": event.target[0].value,
        }

        axios.post(
            'https://urzggw0p.directus.app/items/Meal', 
            data,
            config
        ).then((response) => {}).finally(() =>{
            alert('OK');            
        });
      }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <p className="title">Création d'un plat</p>
                <div className="flex-zone">
                    <TextField placeholder='Nom du plat' name="dishName" value={this.state.dishName} onChange={this.handleInputChange}></TextField>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" />
                        <PhotoCamera />
                    </IconButton>
                </div>
    
                <p className="title"> Recette : </p>
                <div className="flex-zone">
                    <TextField placeholder='Pour commencer ...' name="recipes" value={this.state.recipes} onChange={this.handleInputChange}></TextField>
                    <Button className='createDish' variant="contained" type="submit">Créer le plat</Button>
                </div>
            </form>
        )
    }
}

export default DishesAdd;