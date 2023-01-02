import React from "react";
import {StyledImageProfil} from './styles.js';


export const ImageProfil = () => {

    const mystyle = {
        width: "100%",
        height: "100%",
        borderRadius: "100%"
      };

    return (
        <StyledImageProfil>        
            <img src={process.env.PUBLIC_URL +"/dist/images/logo.jpg"} alt="image" style={mystyle}/>
        </StyledImageProfil>
    )
}