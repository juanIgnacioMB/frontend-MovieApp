import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name:"isLogin",
    initialState:{
        value:false,
    },
    reducers:{
        UserLogin:(state)=>{
        state.value = true
    },
    LogOut:(state)=>{
        state.value = false
    }
    }
})

export const { UserLogin,LogOut } = LoginSlice.actions;

export default LoginSlice.reducer;
