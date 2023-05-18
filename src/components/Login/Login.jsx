import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import img from '../../../public/google.png'

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <div className='form-parent'>
                <form>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' placeholder='Your Email' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' placeholder='Your Password' required />
                    </div>
                    <input className='btn-submit' type="submit" value="Login" />
                </form>
            </div>
            <p className='signup-new'>New To Ema-John ? <small><Link to="/signup">Create New Account</Link></small></p>
            <hr />
            <button className='google-login'><img className='google-logo' src={img} alt="" /> Continue With Google</button>
        </div>
    );
};

export default Login;