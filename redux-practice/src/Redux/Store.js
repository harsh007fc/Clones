import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import BallReducer from './Balls/BallsReducer';

const store = createStore(BallReducer,composeWithDevTools());
export default store;