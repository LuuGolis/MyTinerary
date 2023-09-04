import { configureStore} from '@reduxjs/toolkit'
import { citiesReducers } from '../redux/reducers/citiesReducers.js'
import { itinerariesReducer } from './reducers/itinerariesReducers.js'

export const store = configureStore( {
    reducer: {
        cities: citiesReducers,
        itineraries: itinerariesReducer
    }
})