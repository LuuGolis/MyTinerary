import { createReducer } from '@reduxjs/toolkit'

import { loadItineraries, loadItinerary, loadItineraryByCity } from '../actions/itineraryAction.js'
/* const initialState = {
    itineraries: []
}
export const itineraryReducer = createReducer( initialState, ( builder ) => {
    builder.addCase( loadItineraries, (stateActual, action) =>{
        return {
            ...stateActual,
            itineraries: action.payload
        }
    })
    .addCase( loadItinerary, (stateActual, action) => {
        return {
            ...stateActual,
            itinerary: action.payload
        }
    })
}) */
const initialState = {
    itineraries: [],
    itinerary: {}
}
export const itineraryReducer = createReducer( initialState, ( builder ) => {
    builder.addCase( loadItineraries.fulfilled, (stateActual, action) =>{
        return {
            ...stateActual,
            itineraries: action.payload
        }
    }).addCase(loadItinerary.fulfilled, (stateActual, action) => {
        return {
            ...stateActual,
            itinerary: action.payload
        }

    }).addCase(loadItineraryByCity.fulfilled, (stateActual, action) => {
        return {
            ...stateActual,
            itineraries: action.payload
        }

    })}
    )