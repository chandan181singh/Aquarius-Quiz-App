import {configureStore} from '@reduxjs/toolkit';
import toggleLoginSlice from './toggleSlice';
import toggleModelSlice from './UserStore/quizModelToggle'





const store=configureStore({
    reducer:{toggle:toggleLoginSlice,modal:toggleModelSlice}
})



export default store;