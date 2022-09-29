import { configureStore } from "@reduxjs/toolkit";
import authSlicer from "./auth";
import userSlice from "./user";

export default configureStore({
    reducer: {
        auth: authSlicer.reducer,
        user: userSlice.reducer
    }
})