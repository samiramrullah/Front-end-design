import {createSlice} from '@reduxjs/toolkit';

const PostSlice=createSlice({
    name:'post',
    initialState:{
       postStatus:false,
    },
    reducers:{
        setpostStatus(state,action){
            console.log(action.payload);
            state.postStatus=action.payload;
        },
    },
});

export const {setpostStatus}=PostSlice.actions;
export default PostSlice.reducer;
