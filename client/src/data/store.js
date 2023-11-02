import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';

const store = configureStore({
    reducer: {
        userList : userReducer
        
    }
})

export default store;