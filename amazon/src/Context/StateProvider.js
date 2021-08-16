//data layer

import React,{createContext,useContext,useReducer} from "react";

//this is a data layer
export const StateContext = createContext();


///built a provider
export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);


//custom hook  bn gya yeh jo ki humein basket aur user ka access provide keta hai ok
export const useStateValue = () => useContext(StateContext);