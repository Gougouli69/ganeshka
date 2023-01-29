import { color } from "@mui/system";
import React from "react";
import { StyledText } from "./styles";


export const Text = ({type, ...props}) => {

    return ( 
        <StyledText 
        style={{
            textAlign: "left",
            fontFamily: type && type === 'title-text' ? "'Margarine', cursive" : '',
            ...props,
        }}
        >{props.children}</StyledText>
    )
}