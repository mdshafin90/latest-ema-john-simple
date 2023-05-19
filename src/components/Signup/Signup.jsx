import React, { useContext, useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Signup = () => {
    const [error, setError] = useState('')

    const { createUser } = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password !== confirm) {
            setError("Your Password didn't Match")
            return
        }
        else if (password.length < 6) {
            setError("Password must be 6 Characters or Longer")
            return
        }
        else {
            setError('')
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <div className='form-parent'>
                <form onSubmit={handleSignUp}>
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
                        <input type="password" name='confirm' placeholder='Confirm Password' required />
                    </div>
                    <p className='error-msg'>{error}</p>
                    <input className='btn-submit' type="submit" value="Sign Up" />
                </form>
            </div>
            <p className='signup-new'>Already have an Account ? <small><Link to="/login">Please Login</Link></small></p>
        </div>
    );
};

export default Signup;