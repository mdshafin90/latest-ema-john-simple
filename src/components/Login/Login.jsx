import React, { useContext } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../public/google.png'
import { AuthContext } from '../../Providers/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// const provider = new GoogleAuthProvider()

const Login = () => {
    const { signIn, googleLogIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    // const handleGoogleLogIn = () =>{
    //     return signInWithPopup()
    // }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <div className='form-parent'>
                <form onSubmit={handleLogin}>
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
            <p className='or'>--------------------------- or -------------------------</p>
            <button onClick={() => googleLogIn()} className='google-login'><img className='google-logo' src={img} alt="" /> Continue With Google</button>
        </div>
    );
};

export default Login;