import Post from './Components/Post';
import './App.css';
import React,{useState,useEffect} from 'react';
import { auth, db } from './Fireabase/Firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button,Input } from '@material-ui/core';
import ImageUpload from './Components/ImageUpload';


function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  let [posts,setPosts] = useState([]);
  let [open,setOpen] = useState(false);
  let [username,setUsername] = useState('');
  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');
  let [user,setUser] = useState(null);
  let [openSignIn,setOpenSignIn] = useState(false);


  useEffect(()=>{
    let unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){ //user has logged in
        console.log(authUser);
        setUser(authUser);

        // if(authUser.displayName){

        // }
        // else{
        //   return authUser.updateProfile({
        //     displayName:username,
        //   })
        // }
      }
      else{ //user has logged out
        setUser(null);
      }
    })

    return ()=> {
      unsubscribe();
    }
  },[user,username])


  useEffect(()=> {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot)=> {
      setPosts(snapshot.docs.map((doc)=> ({
        id:doc.id,
        post:doc.data(),
      })));
    })
  },[])

  let signUp = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((authUser)=>{ return authUser.user.updateProfile({
       displayName:username
    })})
    .catch((error)=>alert(error.message));
    setEmail('');
    setUsername('');
    setPassword('');
    setOpen(false);
  }

  let signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .catch((error)=>alert(error.message));
    setEmail('');
    setPassword('');
    setOpenSignIn(false);
  }





  
  return (
    <div className="app">

      {user?.displayName ? (<ImageUpload username={user.displayName}/>) : (<h3>Sorry Need To Login</h3>
        )}
      
      <Modal
        open={open}
        onClose={()=>{setOpen(false)}}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className='app__signup'>
      <center>
        <img className='app__headerImage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png" alt="" />
        </center>
        <Input placeholder='Username' type='text' value={username} onChange={(e)=> setUsername(e.target.value)} />

        <Input placeholder='email' type='email' value={email} onChange={(e)=> setEmail(e.target.value)} />

        <Input placeholder='Password' type='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />

        <Button type='submit' onClick={signUp}>Sign Up</Button>
        </form>
    </div>
      </Modal>

      {/* Second Modal */}

      <Modal
        open={openSignIn}
        onClose={()=>{setOpenSignIn(false)}}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className='app__signup'>
      <center>
        <img className='app__headerImage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png" alt="" />
        </center>
        
        <Input placeholder='email' type='email' value={email} onChange={(e)=> setEmail(e.target.value)} />

        <Input placeholder='Password' type='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />

        <Button type='submit' onClick={signIn}>Sign In</Button>
        </form>
    </div>
      </Modal>

    

     <div className="app__header">
       <img className='app__headerImage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png" alt="" />
     </div>

     {
       user ? (<Button onClick={()=>auth.signOut()}>Log Out</Button>) : 
       (
         <div className="app__loginContainer">
           <Button onClick={()=>setOpenSignIn(true)}>Sign In</Button>
           <Button onClick={()=>setOpen(true)}>Sign Up</Button>

         </div>
         )}
     

     {
       posts.map(({id,post})=> (
         <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
       ))
     } 
    </div>
  );
}

export default App;
