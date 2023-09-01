import { configureStore} from '@reduxjs/toolkit'
import { citiesReducers } from '../redux/reducers/citiesReducers.js'

export const store = configureStore( {
    reducer: {
        cities: citiesReducers
    }
})