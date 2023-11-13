import {createSlice} from '@reduxjs/toolkit';

const initialState={
    isShow:false,
    link:""
}

const toggleModelSlice=createSlice({
    name:'showModel',
    initialState:initialState,
    reducers:{
        toggleHandler(state,action){
            state.isShow=true;
            state.link=action.payload;
        },

        modelHide(state){
            state.isShow=false;
        }
    }
})

export const modelActions=toggleModelSlice.actions;
export default toggleModelSlice.reducer;