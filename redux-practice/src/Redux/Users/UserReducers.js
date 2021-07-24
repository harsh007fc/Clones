import { FETCH_USER_FAILURE,FETCH_USER_SUCCESS,FETCH_USER_REQUEST } from "./UserTypes";


const initialState = {
    loading:false,
    users:[],
    error:'',
}

let userReducer = (state=initialState,action)=>{
    switch(action.type)
    {
        case FETCH_USER_REQUEST :
            return {...state,loading:true}
        case FETCH_USER_SUCCESS :
            return {error:'',loading:false,users:action.payload}
        case FETCH_USER_FAILURE :
            return {error:action.payload,users:[],loading:false}
        default:
            return state
    }
}

export default userReducer;