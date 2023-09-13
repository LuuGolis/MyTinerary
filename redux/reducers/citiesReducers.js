import { createReducer } from "@reduxjs/toolkit";
import { loadCitiesAsync, filterCities, loadCityAsync } from "../actions/citiesActions.js";

const initialState = {
    allCities: [],
    filteredCities: [],
    itinerary: [],
    city: {}
}

export const citiesReducers = createReducer(initialState, (builder) =>
   /*  builder.addCase(loadCities, (actualState, action) => {
        return {
            ...actualState,
            allCities: action.payload,
            filteredCities: action.payload
        }
    }).addCase(loadCity, (actualState, action) => {
        const city = actualState.allCities.filter(city => city._id === action.payload._id)
        const newCity = city

        return {
            ...actualState,
            city: newCity
        }
    }).addCase(filterCities, (actualState, action) => {
        const filteredSearch = actualState.allCities.filter(city =>
            city.name.toLowerCase()
                .includes(action.payload.input))

        let newFilteredCities = filteredSearch

        return {
            ...actualState,
            filteredCities: newFilteredCities
        }

    }
 
    )*/ builder.addCase(loadCitiesAsync.fulfilled, (actualState, action) => {
        return {
            ...actualState,
            allCities: action.payload,
            filteredCities: action.payload
        }
    }).addCase(loadCityAsync.fulfilled, (actualState, action) => {
        return {
            ...actualState,
            city: action.payload
        }
    }).addCase(filterCities, (actualState, action) => {
        const filteredSearch = actualState.allCities.filter(city =>
            city.name.toLowerCase()
                .includes(action.payload.input))

        let newFilteredCities = filteredSearch

        return {
            ...actualState,
            filteredCities: newFilteredCities
        }})
 
)