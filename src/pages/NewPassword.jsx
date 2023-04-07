import React from 'react';
import '../styles/NewPassword.scss';
import LogoYard from '../../maquetacion/logos/logo_yard_sale.svg'
import Header from '../components/Header';

const NewPassword = () => {
    return (
    <>
    <Header/>
    <div className="NewPassword">
        <div className="NewPassword-container">
            <img src={LogoYard} alt="logo" className="logo"/>
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>
            <form action="/" className="form">
                <label htmlFor="email" className="label">Email Address</label>
                <input type="text" id="email" placeholder="juan@aeropoder.com" className="input input-email"/>
                <label htmlFor="new-password" className="label">Password</label>
                <input type="password" id="password" placeholder="*********" className="input input-password"/>
                <input type="submit" value="Log in" className="primary-button login-button"/>
                <a href="http://" target="_blank" rel="noopener noreferrer">Forgot my password</a>
            </form>
            <button className="secondary-button signup-button">Sign Up</button>
        </div>
    </div>
    </>
    );
}

export default NewPassword;