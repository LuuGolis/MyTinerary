import { createReducer } from "@reduxjs/toolkit";
import { loadUser, signUp, signIn, signInToken, logOut } from "../actions/userAction";

const initialState = {
    user: null,
    token: null
}

export const userReducer = createReducer( initialState, (builder) => 
builder.addCase(loadUser,(actualState, action) => {
    return {
        ...actualState,
        user: action.payload
    }
}
).addCase( signUp.fulfilled, (actualState, action) => {
return {
    ...actualState,
    user: action.payload.user,
    token: action.payload.token
}
}).addCase( signIn.fulfilled, (actualState, action) => {
    return {
        ...actualState,
        user: action.payload.user,
        token: action.payload.token

    }
    }).addCase( signInToken.fulfilled, (actualState, action) =>{
        return{
            ...actualState,
            user: action.payload.user,
            token:action.payload.token
        }
    }).addCase(logOut, (actualState,action) => {
        return {
            ...actualState,
            user:null,
            token:null
        }
    })
)