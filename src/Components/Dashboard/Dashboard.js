import React, { Component } from 'react';
import Header from '../Header'
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/reducer';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        this.props.getUserInfo()
    }

    render() {
        // console.log(this.props.user)
        const { firstname, lastname, picture } = this.props.user;

        const profilePic = picture ? <img src={picture} alt='profilepic' className='profilepic' /> : <div className='profilepic'></div>;

        return (
            <div>
                <Header />
                <div className='dashboard-parent'>
                    <div className='dashboard-child'>
                        <div className='dashboard-top'>
                            <div className='profile-container'>

                                <div className='user-left'>{profilePic}</div>

                                <div className='user-right'>
                                    {firstname ? <h2>{firstname}</h2> : <h2>Brittany</h2>}
                                    {lastname ? <h2>{lastname}</h2> : <h2>Jones</h2>}
                                    <div className='edit-button-container'><button className='edit-button'>Edit Profile</button></div>
                                </div>

                            </div>

                            <div className='welcome'>
                                <p>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</p>
                            </div>
                        </div>

                        <div>Recommended Friends</div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    // console.log(state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Dashboard);
