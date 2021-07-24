import { combineReducers } from "redux";
import BallReducer from "../Balls/BallsReducer";
import BatReducer from "./BatsReducer";
import userReducer from '../Users/UserReducers'

let rootReducer = combineReducers({
    ball:BallReducer,
    bat:BatReducer,
    user:userReducer,
})

export default  rootReducer