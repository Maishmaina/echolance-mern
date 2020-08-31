import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { GET_ERRORS, SET_CURRENT_USER, GET_USERS, USER_LOADING } from "./types";
import jwt_decode from "jwt-decode";

//register user
export const registerUser = (userData, history) => async (dispatch) => {
  try {
    await axios.post("/api/user/register", userData);
    history.push("/login");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
//Login -get User Token

export const loginUser = (userData) => async (dispatch) => {
  try {
    const result = await axios.post("/api/user/login", userData);
    //save token to localStorage
    const { token } = result.data;
    localStorage.setItem("jwtToken", token);
    setAuthToken(token);
    //decode token to get user data
    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

//get all users
export const getAllFrontUsers = () => async (dispatch) => {
  dispatch(setUserLoading());
  try {
    const res = await axios.get("/api/user/all/users");
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_USERS,
      payload: [],
    });
  }
};

//Logout user
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
//Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
//set loading state
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};
