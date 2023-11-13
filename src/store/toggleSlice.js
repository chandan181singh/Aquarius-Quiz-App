// import {createSlice} from '@reduxjs/toolkit';

// var initial={
//     login:false,
// }

// const toggleLoginSlice=createSlice({
//     name:'toggle',
//     initial:initial,
//     reducers:{
//         toggleHandler(state){
//              state.login=!state.login;
//         },
//     }
// })

// export const toggleActions=toggleLoginSlice.actions;
// export default toggleLoginSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

const initialState={
    login:false,
}

const toggleLoginSlice=createSlice({
    name:'toggle',
    initialState:initialState,
    reducers:{
        toggleHandler(state){
            state.login=!state.login
        },
    }
})

export const toggleActions=toggleLoginSlice.actions;
export default toggleLoginSlice.reducer;