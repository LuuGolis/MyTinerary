import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadCities = createAction('load_cities', (cities) => {
    return {
        payload: {
            cities: cities
        }
    }
})

export const loadCitiesAsync = createAsyncThunk('load_cities_async', async () => {

    try {
        const petition = await axios('http://localhost:3000/api/cities')
        return petition.data.response

    } catch (error) {
        console.log(error);
    }
})

export const loadCityAsync = createAsyncThunk( 'load_city_async', async ( id )=>{
    try {
        const petition = await axios.get('http://localhost:3000/api/cities/' +id)
        return petition.data.response

    } catch (error) {
        console.log(error);
    }
})

export const filterCities = createAction('filter_cities', (search) => {
    return {
        payload: {
            input: search
        }
    }
})