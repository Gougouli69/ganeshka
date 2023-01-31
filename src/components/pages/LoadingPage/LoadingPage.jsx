import { LinearProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { Container } from "../../atoms/Container/Container";
import { Text } from "../../atoms/Text/Text";
import { useTheme } from "styled-components";

export const LoadingPage = () => {

    let valueLoading = 0;
    for(let i=0; i<100;i++){
        incr()
        // console.log(i)
        // setTimeout(() => {}, 300);
    }
    function incr(){
        valueLoading += 1;
        // console.log(valueLoading)
    }

    const theme = useTheme();
    const bg_css = `linear-gradient(180deg, ${theme.primary} 0%, ${theme.background} 100%)`;

    return (
        <Container 
        sx={{
            height: '100vh',
            backgroundImage: bg_css
        }}
        padding="20px"
        >
            <Text 
            type="title-text" 
            fontSize="45px" 
            textAlign="center"
            color="white"
            margin="20vh 0"
            >ReactDiet</Text>
            <LinearProgress variant="buffer" valueBuffer={100} value={valueLoading} />

            <Text 
            textAlign="center"
            margin="60px 0 0 0"
            >
                Le saviez-vous
            </Text>

            <Text 
            textAlign="center"
            fontSize="13px" 
            fontStyle="italic"
            margin="0">
                Leo sait bien faire à manger
            </Text>

        </Container>
    )
}