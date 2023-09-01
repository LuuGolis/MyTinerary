import { createReducer } from "@reduxjs/toolkit";
import { loadCities, filterCities } from "../actions/citiesActions";

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
    return {
        ...actualState
    }
}

)
)