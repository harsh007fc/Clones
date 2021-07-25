import Post from './Components/Post';
import './App.css';
import React,{useState,useEffect} from 'react';
import { db } from './Fireabase/Firebase';
function App() {

  let [posts,setPosts] = useState([]);


  useEffect(()=> {
    db.collection('posts').onSnapshot((snapshot)=> {
      setPosts(snapshot.docs.map((doc)=> doc.data()));
    })
  },[])
  return (
    <div className="app">
     <div className="app__header">
       <img className='app__headerImage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png" alt="" />
     </div>


     {
       posts.map((post)=> (
         <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
       ))
     } 
    </div>
  );
}

export default App;
