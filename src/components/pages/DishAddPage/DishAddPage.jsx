import { BottomNavigationCustomized } from "../../organisms/BottomNavigation/BottomNavigation"
import { DishesAdd } from "../../organisms/DishesAdd/DishesAdd"
import { Navbar } from "../../organisms/Navbar/Navbar"

export const DishAddPage = () => {

    return (
        <>
            <Navbar></Navbar>
            <DishesAdd></DishesAdd>
            <BottomNavigationCustomized></BottomNavigationCustomized>
        </>
    )

}