import {createSlice, createAsyncThunk, nanoid} from '@reduxjs/toolkit'
import axios from 'axios'
import { CreatedPost, Post, PostsState } from '../interfaces'

const initialState:PostsState = {
    post: null,
    posts:[],
    isPending: false,
    isError: false
}

export const getPosts = createAsyncThunk('getPosts', async () => {

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

    return response.data
})

export const createPost = createAsyncThunk('createPost', async (newPostData : CreatedPost) => {

    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPostData)

    return response.data
})

const postSlice = createSlice({
    name : 'posts',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state) => {
            state.isPending = true;
            state.isError = false;
          });

        builder.addCase(getPosts.fulfilled, (state, {payload}) => {
            state.isPending = false;
            state.posts = payload;
            state.isError = false
          });

        builder.addCase(getPosts.rejected, (state, {payload}) => {
            state.isPending = false;
            state.posts = [];
            state.isError = true;
        });

        builder.addCase(createPost.fulfilled, (state, {payload}) => {

            const update = {...payload, id : nanoid()}
            console.log('====================================');
            console.log(update);
            console.log('====================================');
            state.post = payload;
            state.posts.unshift(update)
        })

        
    }

})

export default postSlice.reducer