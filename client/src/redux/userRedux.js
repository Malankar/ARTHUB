//Managing the user by redux 
import { createSlice } from "@reduxjs/toolkit";

//First Create slice using redux toolkit
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: null,
  },
  //specify the reducers according to states
  reducers: {       
    //fetch the user
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    //update the current user after execution
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    //throw error if any
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload.data;
    },
    
    //fetch user if any
    RegistrationStart: (state) => {
      state.isFetching = true;
    },

    //update the current user after execution
    RegistrationSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },

    //throw if any error found
    RegistrationFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload.data;
    },

  },
});
// export the reducers 
export const { loginStart, loginSuccess, loginFailure, RegistrationStart, RegistrationSuccess, RegistrationFailure} = userSlice.actions;
export default userSlice.reducer;
