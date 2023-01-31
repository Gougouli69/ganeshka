import React from "react";
import { Container } from "../../atoms/Container/Container";
import { Text } from "../../atoms/Text/Text";
import { useTheme } from "styled-components";

export const DietlastMessage = ({...props}) => {
    
    const theme = useTheme()
    return (
        <Container 
            padding={"5px 20px"} 
            backgroundColor={theme.primary} 
            margin={'30px 0 '} 
            sx={{color:'white'}}
            >

            <Text>
                Message de M. Taranski
            </Text>

            <Text fontSize={'12px'} >
                Bonjour Charlie, merci de m'avoir choisis comme diététicien attitré. Je te propose que nous échangions par téléphone pour que j'en sache plus sur vos habitudes alimentaires.
            </Text>

        </Container>
    )
}