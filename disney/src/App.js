import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'
import './App.css';
import Login from './Components/Login';
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route>
            <Login />

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
