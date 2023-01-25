import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function useLoadingDishes(){
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
    }

    useEffect(() => {
        console.log('Actualisation dishes', dishes);
    }, [dishes])

    return {dishes, isLoading}
}