import { BottomNavigationCustomized } from "../../organisms/BottomNavigation/BottomNavigation"
import { DishesInfo } from "../../organisms/DishesInfo/DishesInfo"
import { Navbar } from "../../organisms/Navbar/Navbar"
import { useParams } from 'react-router-dom';

export const DishInfoPage = () => {
    const { id } = useParams();

    return (
        <>
            <Navbar></Navbar>
            <DishesInfo id={id}></DishesInfo>
            <BottomNavigationCustomized></BottomNavigationCustomized>
        </>
    )

}