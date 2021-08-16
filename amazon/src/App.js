import React,{useEffect} from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import './App.css';
import Checkout from './Components/Checkout';
import { auth } from './Components/Firebase';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import { useStateValue } from './Context/StateProvider';

function App() {

  const [{user},dispatch] = useStateValue();
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //userisLoggedIn
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        //userLoggedout
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    });

    return ()=>{
      //cleanup fucntion
      unsub();
    }
   
  }, []);
  console.log(user);
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
          <Login></Login>
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
