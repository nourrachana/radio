import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoading: true,
    userData: [],
};
const authReducer = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser: (state, action) => {
            state.userData = [...state.userData, action.payload]
            // console.log('setUser',state);
        },
        setUsername: (state, action) => {
            const {userData} = state;
            userData[0].username = action.payload.username;
            // console.log('username', userData[0].username = action.payload.username);
        },
    },
})

export const {setUser , setUsername }  = authReducer.actions
export default authReducer.reducer