import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "../features/commentsSlice";
import postsSlice from "../features/postsSlice";

export const store = configureStore({
    reducer:{
        posts : postsSlice,
        comments: commentsSlice
    }
})