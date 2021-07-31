import React from 'react'
import '../Styles/Login.css'
import { loginUrl } from './Spotify'
function Login() {
    return (
        <div className='login'>
            <img src="http://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />

            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
