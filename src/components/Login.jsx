import React, { useState } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

const Login = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(
            login({
                name: userName,
                email: userEmail,
                password: userPassword,
                loggedIn: true
            })
        );
    };

    return (
        <div className='login'>
            <form className='login__form' onSubmit={handleLogin}>
                <h1>Login here</h1>
                <input
                    type='text'
                    name='login'
                    placeholder='Name'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type='email'
                    name='login'
                    placeholder='Email'
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                <input
                    type='password'
                    name='login'
                    placeholder='Password'
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                />
                <button className="submit__btn" type="submit">Log in</button>
            </form>
        </div>
    );
};

export default Login;
