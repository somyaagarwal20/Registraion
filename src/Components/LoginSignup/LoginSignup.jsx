import React, { useState } from 'react'
import './LoginSignup.css'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';

const LoginSignup = () => {
    const [action, setAction] = useState("Login")
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                 {action==="Login"?<div></div>: <div className="input">
                 <PersonIcon className='icons' />
                 <input type='Name' placeholder='Name' />
             </div>}
               

                <div className='input'>
                    <EmailIcon className='icons' />
                    <input type='Emails' placeholder='Email address' />
                </div>
               

                <div className='input'>
                    <KeyIcon className='icons' />
                    <input type='password' placeholder='Enter password' />
                </div>
               

            </div>
            {action==="Sign Up"?<div></div>:<div className='forgot_password'> Lost password ? <span>click here</span></div>}
            
            <div className=' container_submit'>
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>SignUp</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>

            </div>

        </div>
    )
}

export default LoginSignup
