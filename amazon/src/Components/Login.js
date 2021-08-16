import React from 'react'
import '../Styles/Login.css'
import {Link,useHistory} from 'react-router-dom'
function Login() {
    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>SignIn</h1>
                <form action="
                ">
                    <h5>Email</h5>
                    <input type="email"/>
                    <h5>Password</h5>
                    <input type="password"/>
                    <button type='submit' className='login__signInButton'>SignIn</button>
                </form>
                <p>
                By signing-in you agree to Amazon's Conditions of see our Privacy Notice, our Cookies Notice and our Notice.
                </p>
                <button className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
