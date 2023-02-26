import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "../features/commentsSlice";
import postsSlice from "../features/postsSlice";
import userSlice from "../features/userSlice";

export const store = configureStore({
    reducer:{
        posts : postsSlice,
        comments: commentsSlice,
        user : userSlice
    }
})