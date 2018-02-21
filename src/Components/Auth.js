import React from 'react';
import helo from '../assets/logo.png';
import './Auth.css';

export default function Auth() {
  return (
    <div className='auth main-gradient'>
      <div className='auth-child main-gradient'>
        <div className='logo-container'>
          <img src={helo} alt='helo-logo' />
          <div>
            <h1>Helo</h1>
          </div>
        </div>

        <div className='auth-link-container'>
          <div className='login-button-container'>
            <a href={process.env.REACT_APP_LOGIN}><span className='login-button'>Login / Register</span></a>
          </div>
        </div>

      </div>
    </div>
  )
}




