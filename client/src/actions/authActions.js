import axios from "axios";
import { GET_ERRORS } from "./types";

//register user
export const registerUser=async(userData,history)=>(dispatch)=>{
   try {
   await axios.post("/api/user/register",userData);
   history.push("/login");
} catch (err) {
    dispatch({
        type:GET_ERRORS,
        payload:err.response.data,
    })   
}

} 