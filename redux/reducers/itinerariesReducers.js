import { createReducer } from "@reduxjs/toolkit";
import { loadItineraries } from "../actions/itinerariesActions";
const initialState = {
    itineraries: []
}
export const itinerariesReducer = createReducer( initialState, ( builder ) => {
    builder.addCase( loadItineraries.fulfilled, (stateActual, action) =>{
        return {
            ...stateActual,
            itineraries: action.payload
        }
    })
})