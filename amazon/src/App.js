import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import './App.css';
import Checkout from './Components/Checkout';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      {/* <Header/> */}
    <div className = 'app' >
      <Switch>
        <Route path='/checkout'>
          <Header/>
           <Checkout/>
        </Route>
        <Route path='/login'>
          <h1>Login ⚠ </h1>
        </Route>
        <Route path='/'>
          <Header/>
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
