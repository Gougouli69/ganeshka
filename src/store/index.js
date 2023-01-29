import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const dishesSlice = createSlice(
    {
        name:"dishes",
        initialState:{
            dishes:[],
            status: 'idle',
            error: null
        },
        reducers: {},
        extraReducers(builder){
            builder
            .addCase(fetchAllDishes.pending, (state, action) => {
                console.log("Pending")
                state.status = 'loading';
            })
            .addCase(fetchAllDishes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.dishes = action.payload.items
                console.log("Succeeded ")
            })
            .addCase(fetchAllDishes.rejected, (state, action) => {
                console.log("FAILED ! U ROCK")
                state.status = 'failed';
            })
        }
    }
);

export const fetchAllDishes = createAsyncThunk('dishes/fetchAllDishes', async (payload, limit) => {
    const token = '';
    const config = {
        url: process.env.REACT_APP_API_BASE_URL + (limit ? '?limit=' + limit : ''),
        method:'get',
        // headers:{
        //     'Authorization': `Bearer ${token}`
        // },
        // data:{}
    }
    console.log("Paylkoad", payload)

    const response = await axios(config).then((res) => {
        console.log("RESPONSE GOT", res)
        return res;
    }).catch((error) => {
        console.log("ERR: ", error);
        return error
    })


    return response.data;
});

// export const fetchAllDishes = async () => {
//     let newDishes =[];
//     let url = process.env.REACT_APP_API_BASE_URL + (limit ? '?limit=' + limit : '');
//     let config = {
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//     };
//     setIsLoading(true);
//     await axios.get(
//         url, 
//         config
//     ).then(
//         (response) => {
//             newDishes = response?.data?.data;
//         }
//     ).finally(() =>{
//         setDishes(newDishes);
//         setIsLoading(false)
//     });
// }
