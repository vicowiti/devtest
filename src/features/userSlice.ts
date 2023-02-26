import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
    user: {} | null | string
    isPending :boolean
    isError : boolean
}

const initialState:UserState = {

    user: JSON.parse(localStorage.getItem('user') as string) || {},
    isPending : false,
    isError:false
}

export const loginUser = createAsyncThunk('loginUser', async(userData) => {

    const response = await axios.post('https://pleasant-sheath-dress-crab.cyclic.app//auth/login', userData)

    return response.data

})

export const registerUser = createAsyncThunk('registerUser', async(userData) => {
    
    const response = await axios.post('https://pleasant-sheath-dress-crab.cyclic.app//auth/register', userData)

    return response.data
})


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, {payload}) => {
            localStorage.setItem('user', JSON.stringify(payload))
            state.user = payload
            state.isError = false
            state.isPending = false
        })

        builder.addCase(loginUser.pending, (state) => {
            state.isError = false
            state.isPending = true
        })

        builder.addCase(loginUser.rejected, (state) => {
            state.isError = true
            state.isPending = false
        })

        builder.addCase(registerUser.fulfilled, (state, {payload}) => {
            state.user = payload
            state.isError = false
            state.isPending = false
        })

        builder.addCase(registerUser.pending, (state, {payload}) => {
            state.isError = false
            state.isPending = true
        })

        builder.addCase(registerUser.rejected, (state, {payload}) => {
            state.isError = true
            state.isPending = false
        })
    }
})

export default userSlice.reducer