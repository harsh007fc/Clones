import Post from './Components/Post';
import './App.css';
import React,{useState} from 'react';

function App() {

  let [posts,setPosts] = useState([
    { username:'Harsh',
     caption:'this is a caption',
     imageUrl:'https://mumbaimirror.indiatimes.com/photo/76922257.cms'},
    { username:'Shivam',
     caption:'I create Dope Shit' ,
     imageUrl:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTgA0iOH9Rh9SX1hkqHYqKu4t6iHwvnbFsOVZCUuec6lQQRpzxd'}
  ]);
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
