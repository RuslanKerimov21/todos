import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    user: null,
    username: null,
    email: null,
    token: null,
    id: null,
};
const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload.user;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.user = null;
            state.username = null;
            state.email = null;
            state.token = null;
            state.id = null;
        },
    },
});
export const {setUser, removeUser} = userReducer.actions;
export default userReducer.reducer;