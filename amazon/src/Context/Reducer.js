export const  initialState = {
    basket:[],
    user:null,
};


export const getbasketTotal = (basket) => (basket?.reduce((amount,item) => item.price + amount , 0));

const reducer = (state,action)=>{
    // console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,user:action.user
            }
        case 'ADD_TO_BASKET':
            //logic to add to basket
            return {
            ...state,
            basket:[...state.basket,action.item]
        };
        case 'REMOVE_FROM_BASKET':
            //logic to add to basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if(index >= 0){
                newBasket.splice(index,1);
            }else{
                console.warn(`cant remove product (id : ${action}) as its no longer in the cart `);
            }
            return {...state,basket:newBasket};
    
        default:
             return state;
    }
}

export default reducer;