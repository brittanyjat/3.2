import React from 'react';
import home from '../assets/home.png';
import search from '../assets/search.png';

import './Header.css';

export default function Header() {
    return (
        <div id='header'>
            <div className='header-child'>
                <div className='header-left'>
                    <span className='header-title'>Helo</span>
                    <img src={home} alt='link-to-home' className='header-icon'/>
                    <img src={search} alt='link-to-search' className='header-icon search' />
                </div>

                <div className='header-center'>
                    <span>Dashboard</span>
                </div>

                <div className='header-right'>
                    <button className='logout-button'>Logout</button>
                </div>

            </div>
        </div>
    )
}