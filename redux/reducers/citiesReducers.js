import { createReducer } from "@reduxjs/toolkit";
import { loadCities, filterCities, loadCitiesAsync } from "../actions/citiesActions";

const initialState = {
    allCities: [],
    filteredCities: []
}

export const citiesReducers = createReducer( initialState, (builder)=>
builder.addCase( loadCities, (actualState, action) => {
const newState = { ... actualState}

newState.allCities = action.payload.cities
newState.filteredCities = action.payload.cities

return newState
}).addCase( filterCities, ( actualState, action) =>{
   const filteredSearch = actualState.allCities.filter(city => 
        city.name.toLowerCase()
        .includes(action.payload.input))

        let newFilteredCities = filteredSearch
    return {
        ...actualState,
        filteredCities: newFilteredCities
    }
}

).addCase( loadCitiesAsync.fulfilled,( actualState, action) =>{
    return {
        ...actualState,
        allCities: action.payload,
        filteredCities: action.payload
    }
})
)