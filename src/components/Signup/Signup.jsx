import React from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <div className='form-parent'>
                <form>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' placeholder='Your Email' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Create Password</label>
                        <input type="password" name='password' placeholder='Create Password' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name='password' placeholder='Confirm Password' required />
                    </div>
                    <input className='btn-submit' type="submit" value="Sign Up" />
                </form>
            </div>
            <p className='signup-new'>Already have an Account ? <small><Link to="/login">Please Login</Link></small></p>
        </div>
    );
};

export default Signup;