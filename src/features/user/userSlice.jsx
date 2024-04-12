import { createSlice } from '@reduxjs/toolkit'
import users from './users.jsx'
const initialState = { user: {}, error:'', users: users()}


export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        //reducers pour l'inscription de la personne
        initUser:(state,action) => {
            state.user.name = action.payload.name
            state.user.email = action.payload.email
        },
        errorMessage:(state,action) =>{
            state.error = action.payload
            console.log(state.error)
        },
        /*
        reducers pour l'ajout du score
        */
        addUser:(state,action) => {
            state.user.score = action.payload
            state.users.push(state.user)
        },
    },
})