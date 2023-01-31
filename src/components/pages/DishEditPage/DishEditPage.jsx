import { BottomNavigationCustomized } from "../../organisms/BottomNavigation/BottomNavigation"
import  DishesEdit  from "../../organisms/DishesEdit/DishesEdit"
import { Navbar } from "../../organisms/Navbar/Navbar"
import { useParams } from 'react-router-dom';

export const DishEditPage = () => {

    const { id } = useParams();
    return (
        <>
            <Navbar></Navbar>
            <DishesEdit id={id}></DishesEdit>
            <BottomNavigationCustomized></BottomNavigationCustomized>
        </>
    )

}