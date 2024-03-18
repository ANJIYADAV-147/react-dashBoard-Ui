import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const SignIn=()=>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const onSubmitForm = (e) => {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        if (password.length < 5) {
            alert('Password should be at least 5 characters long');
            return;
        }
        navigate('/');
    };
    return (
        <div className='signIn-container'>
            <div className='leftSide-container'>
                <h1 className='board'>Board.</h1>
            </div>
            <div className='rightSide-container'>
                <h1 className='SignIn'>Sign In</h1>
                <p className='description'>Sign in to your account</p>
                <form className='LoginForm' onSubmit={onSubmitForm}>
                    <label id='email'>Email address</label>
                    <input type='text' htmlFor='email' placeholder='Enter Your Email' className='Input' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <br />
                    <label id='password'>Password</label>
                    <input type='password' htmlFor='password' placeholder='Enter your password' className='Input'value={password} onChange={(e) => setPassword(e.target.value)} />
                    <p className='forgot'>Forgot password?</p>
                    <button type='submit' className='signInButton'>Sign In</button>
                </form>
                <p className='dontHaveAccount'>Don't have an account? <span className='span'>Register here</span></p>
            </div>
        </div>
    );
}

export default SignIn

