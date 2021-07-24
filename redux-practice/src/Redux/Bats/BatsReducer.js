const BUY_BAT = 'BUY_BAT';
const SELL_BAT = "SELL_BAT";

let initialState = {
    numOfBats : 50,
}

let BatReducer = (state = initialState,action) => {
    switch(action.type){
        case BUY_BAT : 
        return {...state,numOfBats:state.numOfBats - action.payload};
        case SELL_BAT :
            return {...state,numOfBats:Number(state.numOfBats) + Number(action.payload)}
        default:
            return state
    }
}

export default BatReducer;


///reducer is a pure fucntion