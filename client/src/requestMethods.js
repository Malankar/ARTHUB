//Import module axios this module with help to establish connection with our API
import axios from "axios";

//Base url for our api
const BASE_URL = "http://localhost:5000/api/";

//this will the user token which is stored in localStorage
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;

//intialize current user if any
const currentUser = user && JSON.parse(user).currentUser; 

//get the current users token
const TOKEN = currentUser?.accessToken;

//creating public request to the api 
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

//for crud operation from user
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
