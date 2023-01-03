import React from "react";
import { StyledText } from "./styles";


export const Text = (props) => {
    return ( 
        <StyledText>{props.children}</StyledText>
    )
}