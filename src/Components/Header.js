import React from 'react';
import home from '../assets/home.png';
import search from '../assets/search.png';
import { withRouter } from 'react-router';

import './Header.css';



class Header extends React.Component {
    render() {
        // console.log(this.props)
        const { history } = this.props;
        return (
            <div id='header'>
                <div className='header-child'>
                    <div className='header-left'>
                        <span className='header-title'>Helo</span>
                        <img src={home} 
                            alt='link-to-home'
                            onClick={() => history.push('/dashboard')}
                            className='header-icon' />
                        <img src={search} alt='link-to-search' className='header-icon search' onClick={() => history.push('/search')}/>
                    </div>

                    <div className='header-center'>
                        <span>Dashboard</span>
                    </div>

                    <div className='header-right'>
                        <a href='http://localhost:4005/auth/logout'><button className='logout-button'>Logout</button></a>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(Header);