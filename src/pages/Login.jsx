import React from 'react';
import '../styles/Login.scss';
import logoMobile from '../../maquetacion/logos/logo_yard_sale.svg';
import Header from '../components/Header';

const Login = () => {
    return (
        <>
        <Header/>
        <div className="Login">
        <div className="Login-container">
            <img src={logoMobile} alt="logo" className="logoMobile"/>

            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>
            <form action="/" className="form">
                <label htmlFor="password" className="label">Password</label>
                <input type="password" id="password" placeholder="*********" className="input input-password"/>
                <label htmlFor="new-password" className="label">Password</label>
                <input type="password" id="new-password" placeholder="*********" className="input input-password"/>
                <input type="submit" value="Confirm" className="primary-button login-button"/>
            </form>
        </div>
    </div>
    </>
    );
}

export default Login;