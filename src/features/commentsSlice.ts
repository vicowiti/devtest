import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { CommentState } from '../interfaces'
import axios from 'axios'

const initialState:CommentState = {
    comment: null,
    comments: [],
    isError: false,
    isPending: false,
}

export const getComments = createAsyncThunk('getComments', async (postId: number, thunkApi) => {
console.log('id', postId);
 try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)

    return response.data
 } catch (error) {
    
    return thunkApi.rejectWithValue(1)
 }
   

    
})

const commentSlice = createSlice({
    name : 'comments',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getComments.fulfilled, (state, {payload}) => {
            state.comments = payload;
            state.isPending = false,
            state.isError = false
        });

        builder.addCase(getComments.pending, (state) => {
            
            state.isPending = true
            state.isError = false
        });

        builder.addCase(getComments.rejected, (state, {payload}) => {
            state.isPending = false,
            state.isError = true
        });


    }
})


export default commentSlice.reducer;