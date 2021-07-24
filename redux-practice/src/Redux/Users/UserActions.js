import { FETCH_USER_FAILURE,FETCH_USER_SUCCESS,FETCH_USER_REQUEST } from "./UserTypes";
import axios from 'axios';


export const fetchUserRequest = () => {
    return{
        type:FETCH_USER_REQUEST
    }
}
export const fetchUserSuccess = (users) => {
    return{
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}
export const fetchUserFailure = (error) => {
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    }
}

export const fetchUsers=()=>{
    return async(dispatch)=>{
        dispatch(fetchUserRequest())
        try{
            let res =  await axios.get('https://jsonplaceholder.typicode.com/users');
            let users = res.data;
            dispatch(fetchUserSuccess(users));
        }
        catch(error){
            dispatch(fetchUserFailure(error.message));
        }
    }
}