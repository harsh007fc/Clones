import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <Router>
    <div className = 'app' >
      <Switch>
        <Route path='/checkout'>
          <h1>Checkout 👍 </h1>
        </Route>
        <Route path='/login'>
          <h1>Login ⚠ </h1>
        </Route>
        <Route path='/'>
          <Header/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
