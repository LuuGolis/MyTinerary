import { configureStore} from '@reduxjs/toolkit'
import { citiesReducers } from '../redux/reducers/citiesReducers.js'
import { itineraryReducer } from '../redux/reducers/itineraryReducer.js'

export const store = configureStore( {
    reducer: {
        cities: citiesReducers,
        itineraries: itineraryReducer
    }
})