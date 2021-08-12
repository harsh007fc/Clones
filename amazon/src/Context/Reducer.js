export const  initialState = {
    basket:[],
    user:null,
};


const reducer = (state,action)=>{
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //logic to add to basket
            return {
            ...state,
            basket:[...state.basket,action.item]
        };
        case 'REMOVE_FROM_BASKET':
            //logic to add to basket
            return {state};
    
        default:
             return state;
    }
}

export default reducer;