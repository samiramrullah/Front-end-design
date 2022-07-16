import {configureStore} from '@reduxjs/toolkit';
import PostReducer from './PostSlice';
import ProfileReducer from './ProfileSlice';

const store=configureStore({
    reducer:{
        post:PostReducer,
        profile:ProfileReducer,
    },
});

export default store;