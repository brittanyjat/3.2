import React, { Component } from 'react';
import Header from '../Header'
import './Dashboard.css';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        axios.get('/auth/me').then(res => {
            this.setState({
                user: res.data
            })
        })
    }

    render() {

        const { history } = this.props;


        const { picture, firstname, lastname, id } = this.state.user;


        const profilePic = picture ? <img src={picture} alt='profilepic' className='profilepic' /> : <div className='profilepic'></div>;

        return (
            <div>
                <Header />
                <div className='content'>
                    <div className='top-section'>

                        <div className='profile-container dashboard-view'>

                            <div className='user-left'>{profilePic}</div>

                            <div className='user-right'>
                                {firstname ? <h2>{firstname}</h2> : null}
                                {lastname ? <h2>{lastname}</h2> : null}
                                <div className='edit-button-container'>
                                    <button
                                        className='edit-button'
                                        onClick={() => history.push(`/profile/${id}`)}>Edit Profile
                                        </button>

                                </div>
                            </div>

                        </div>

                        <div className='welcome'>
                            <p>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</p>
                        </div>
                    </div>

                    <div className='bottom-section'>Recommended Friends</div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
