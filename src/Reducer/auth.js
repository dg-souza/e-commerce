import { createSlice } from "@reduxjs/toolkit";

const authSlicer = createSlice({
    name: 'auth',
    initialState: {
        isLoggedin: false
    },
    reducers: {
        logar(state) {
            state.isLoggedin = true
        },
        logout(state) {
            state.isLoggedin = false
        }
    }
})

export const authActions = authSlicer.actions

export default authSlicer