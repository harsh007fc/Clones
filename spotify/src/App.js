// import logo from './logo.svg';
import React,{useEffect,useState} from 'react';
import './App.css';
import Login from './Components/Login';
import { getTokenFromUrl } from './Components/Spotify';

function App() {
  const [token,setToken] = useState(null);


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token){
      setToken(_token)
    }
  }, [])


  return (
    <div className="app">
      {
        token ? (
          <h1>I am Logged in</h1>
        ): (
          
          <Login/>
        )
      }
    </div>
  );
}

export default App;
