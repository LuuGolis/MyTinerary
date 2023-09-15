import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'



export const loadUser = createAction('load_user', (user) => {
    return {
        payload: user
    }
})

export const signUp = createAsyncThunk("create_user", async (body) => {
    try {
        const response = await axios.post("http://localhost:3000/api/auth/signup", body)
        localStorage.setItem('token', response.data.token)
        console.log(response.data);
        return response.data
    } catch (error) {
        console.log(error);
    }
})

export const signIn = createAsyncThunk("create_user", async (body) => {
    try {
        const response = await axios.post("http://localhost:3000/api/auth/signin", body)
        localStorage.setItem('token', response.data.token)
        return response.data
    } catch (error) {
        console.log(error);
    }


})

export const signInToken = createAsyncThunk("log_token", async (body) => {
    try {
        const token = localStorage.getItem('token')
        const response = await axios.post("http://localhost:3000/api/auth/signin/token", {}, {
            headers: {
                Authorization: "Bearer" + token
            }
        })

        return {
            user: response.data.user,
            token: token
        }

    } catch (error) {
        console.log(error);
    }
})