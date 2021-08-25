import {configureStore,getDefaultMiddeware} from '@reduxjs/toolkit';


export default configureStore({
    reducer:{},
    middleware:getDefaultMiddeware({
        serializableCheck:false,
    }),
});