import React from "react";
import useLoadingDishes from "../../../hooks/useLoadingDishes";
import { BottomNavigationCustomized } from "../../organisms/BottomNavigation/BottomNavigation";
import { DishesList } from "../../organisms/DishesList/DishesList";
import { Navbar } from "../../organisms/Navbar/Navbar";
import { Text } from "../../atoms/Text/Text"
import { Container } from "../../atoms/Container/Container"
import { DietlastMessage } from "../../organisms/DietlastMessage/DietlastMessage";


export const HomePage = () => {

    let {dishes,isLoading} = useLoadingDishes();

    function renderLoadingPage(){
        return <Container padding={'0 5px'}>
            <Text type="title-part">Chargement en cours..</Text>
        </Container>
    }
    function renderLoadedPage(){
        return <Container>
       
            <Text type="title-part" padding={'0 10px'}>Plats conseillés pour ce midi</Text>
            <DishesList dishes={dishes} limit={4}/>
            <DietlastMessage></DietlastMessage>
            
            <Text type="title-part" padding={'0 10px'}>Plats suceptible de vous interesser</Text>
            {/* <LovingDishesList dishes={dishes} limit={2} /> */}
            </Container>
    }

    return (
        <>
            <Navbar></Navbar>
            { isLoading ? renderLoadingPage() : renderLoadedPage()}
            <BottomNavigationCustomized></BottomNavigationCustomized>
        </>
    )

}