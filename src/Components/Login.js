import React, {useRef} from 'react'
import '../Style/Login.css'
import {auth} from '../firebase'
import { Link } from 'react-router-dom'

function Login() {
  

   


    return (
        <div className="login">

            <div className="login_body">
                
                    <h2>AirTv+</h2>
                    <h1>Enjoy the most Wonderful movies & series in your favorite devices</h1>
                    <p>Ready to watch? Enter your email to create your account.</p>
    
                    <div className="login_input">
                        <form>
                            <input 
                            
                            type="email" placeholder="Email"/>
                            <input
                        
                            type="password"
                            placeholder="Password"/>

                            <Link to="/">
                            <button
                            type="submit"
                             className="login_input-button"
                             >Sign In</button>
                             </Link>
                        </form>
                    </div>
           
            </div>
        </div>
    )
}

export default Login
