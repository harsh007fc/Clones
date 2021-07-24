import './App.css';
import store from './Redux/Store';
import {Provider} from 'react-redux'
import BallsContainer from './Redux/Balls/BallsContainer';
import BatContainer from './Redux/Bats/BatContainer';
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <BallsContainer/>
        <BatContainer/>
      </div>
    </Provider>
  );
}

export default App;
