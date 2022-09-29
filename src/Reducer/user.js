import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: { }
    },
    reducers: {
        addUserInfo(state, action) {
            const newUser = action.payload

            state.userInfo = {
                id: newUser.id,
                login: newUser.login
            }
        }
    }
})

export const userActions = userSlice.actions

export default userSlice