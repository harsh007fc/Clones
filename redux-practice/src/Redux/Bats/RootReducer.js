import { combineReducers } from "redux";
import BallReducer from "../Balls/BallsReducer";
import BatReducer from "./BatsReducer";

let rootReducer = combineReducers({
    ball:BallReducer,
    bat:BatReducer
})

export default  rootReducer