import styled, { css } from "styled-components";

export const StyledLogo = styled.p`
    text-align: left;



    ${props => props.primary && css`
        background-color: blue;
    `}
`