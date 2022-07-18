import { createSlice } from "@reduxjs/toolkit";

const ProfileSlice = createSlice({
  name: "profile",
  initialState: {
    showmodel:false,
    deleteStatus: false,
    data:[],
  },
  reducers: {
    setdeleteStatus(state, action) {
      state.deleteStatus = action.payload;
    },
    setshowmodel(state,action){
      state.showmodel=action.payload;
    }
  },
});
export const { setdeleteStatus,setshowmodel } = ProfileSlice.actions;
export default ProfileSlice.reducer;
