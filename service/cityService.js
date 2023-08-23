import axios from "axios";

const citiesQueries = axios.create({
    url: 'https://localhost:3000/api/cities'
})

export const getAllCities= async (queryParams) =>{
    try{
        const response = await  citiesQueries(queryParams)
        return response.data.response
    }catch(error){
        return []
    }
}