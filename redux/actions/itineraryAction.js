import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* export const loadItineraries = createAction('load_itineraries',(itineraries) => { 
    return {
        payload : itineraries
    }
})
export const loadItinerary = createAction('load_itinerary', (id) => {
try {
    const petition = axios.get('http://localhost:3000/api/itineraries/' + id)
    return petition.data
}catch(err){
    return []}
}) */
    /*   try
    { const petition = axios.'http://localhost:3000/api/itineraries/' +id)
    return petition.data
}catch(err){
    return []
}
}) */
export const loadItineraries = createAsyncThunk('load_itineraries', async () => {
    try{
    const petition = await axios.get('http://localhost:3000/api/itineraries')
    return petition.data
}catch(err){
    return []
}
}) 

export const loadItinerary = createAsyncThunk('load_itinerary', async (id) => {
    try{
    const petition = await axios.get('http://localhost:3000/api/itineraries/' +id)
    return petition.data.itineraries
}catch(err){
    console.log(err);
}
})  

export const loadItineraryByCity = createAsyncThunk ('load_itinerary_by_city', async (id) => {
    try{
        const petition = await axios.get('http://localhost:3000/api/itineraries/city/' +id)
        return petition.data.response
    }catch(err){
        console.log(err);
    }
})
