import React from "react";
import { Bell } from "../../atoms/Bell/Bell";
import { ImageProfil } from "../../atoms/ImageProfil/ImageProfil";
import { Logo } from "../../atoms/Logo/Logo";
import { StyledNavbar } from "./styles";

export const Navbar = () => {
    return (
        <StyledNavbar>
            <Logo></Logo>
            <ImageProfil></ImageProfil>
        </StyledNavbar>
    )
}