//Importing the reducers
import { loginStart, loginSuccess, loginFailure, RegistrationStart, RegistrationSuccess, RegistrationFailure} from "./userRedux";
//Import the public Request 
import { publicRequest, userRequest } from "../requestMethods";
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";
//Making public request using async function
//here dispatch is used for dispatching the reducers imported from userRedux
export const login = async (dispatch, user) => {   
  //fetching the user
  dispatch(loginStart());
  try {
    //making the public post request to API with user parameter
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure(error.response));
  }
};

//Register call to api
export const register = async (dispatch, user) => {
  dispatch(RegistrationStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(RegistrationSuccess(res.data));
  } catch (error) {
    dispatch(RegistrationFailure(error.response));
  }
};

//add product
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post("/products", product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
