import Post from './Components/Post';
import './App.css';

function App() {
  return (
    <div className="app">
     <div className="app__header">
       <img className='app__headerImage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png" alt="" />
     </div>
     <Post></Post>
     <Post></Post>
     <Post></Post>
     <Post></Post>
    </div>
  );
}

export default App;
