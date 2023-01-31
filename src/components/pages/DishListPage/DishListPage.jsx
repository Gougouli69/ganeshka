import React from "react";
import useLoadingDishes from "../../../hooks/useLoadingDishes";
import { BottomNavigationCustomized } from "../../organisms/BottomNavigation/BottomNavigation";
import { DishesList } from "../../organisms/DishesList/DishesList";
import { Navbar } from "../../organisms/Navbar/Navbar";

export const DishListPage = () => {
    let {dishes,isLoading} = useLoadingDishes();
    return (
        <>
            <Navbar></Navbar>
            { !isLoading ? <DishesList dishes={dishes} addbutton='OK'/> : "Loading ... </>"}
            <BottomNavigationCustomized></BottomNavigationCustomized>
        </>
    )

}

export default DishListPage;