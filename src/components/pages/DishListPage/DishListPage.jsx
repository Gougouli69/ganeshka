import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BottomNavigationCustomized } from "../../organisms/BottomNavigation/BottomNavigation";
import { DishesList } from "../../organisms/DishesList/DishesList";
import { Navbar } from "../../organisms/Navbar/Navbar";

export const DishListPage = () => {

    const [dishes, setDishes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        fetchAllDishes()
    }, []);

    const fetchAllDishes = async () => {
        let newDishes =[]
        let config = {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        };
        setIsLoading(true);
        await axios.get(
            'https://urzggw0p.directus.app/items/Meal', 
            config
        ).then(
            (response) => {
                newDishes = response?.data?.data;
            }
        ).finally(() =>{
            setDishes(newDishes);

            setIsLoading(false)

        });
        console.log(  "test2", dishes);
    }
    useEffect(() => {
console.log('Actualisation sishe', dishes);

    }, [dishes])
    return (
        <>
            <Navbar></Navbar>
            { !isLoading ? <DishesList dishes={dishes}/> : <>Loading ... </>}
            <BottomNavigationCustomized></BottomNavigationCustomized>
        </>
    )

}

export default DishListPage;