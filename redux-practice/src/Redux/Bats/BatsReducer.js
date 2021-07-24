const BUY_BAT = 'BUY_BAT';

let initialState = {
    numOfBats : 50,
}

let BatReducer = (state = initialState,action) => {
    switch(action.type){
        case BUY_BAT : 
        return {...state,numOfBats:state.numOfBats - action.payload};
        default:
            return state
    }
}

export default BatReducer;