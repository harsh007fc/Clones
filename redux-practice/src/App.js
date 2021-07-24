import './App.css';
import store from './Redux/Store';
import {Provider} from 'react-redux'
import BallsContainer from './Redux/Balls/BallsContainer';
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <BallsContainer/>
      </div>
    </Provider>
  );
}

export default App;
