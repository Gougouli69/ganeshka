import React from "react";
import {StyledImageProfil} from './styles.js';


export const ImageProfil = () => {
    return (
        <StyledImageProfil src={process.env.PUBLIC_URL +"/dist/images/logo.jpg"} alt="Photo de profil">
        </StyledImageProfil>
    )
}