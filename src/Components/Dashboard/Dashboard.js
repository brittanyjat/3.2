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

        const { history } = this.props;

        const profilePic = picture ? <img src={picture} alt='profilepic' className='profilepic' /> : <div className='profilepic'></div>;

        return (
            <div>
                <Header />
                <div className='content'>
                    <div className='top-section'>

                        <div className='profile-container dashboard-view'>

                            <div className='user-left'>{profilePic}</div>

                            <div className='user-right'>
                                {firstname ? <h2>{firstname}</h2> : <h2>Brittany</h2>}
                                {lastname ? <h2>{lastname}</h2> : <h2>Jones</h2>}
                                <div className='edit-button-container'>
                                    <button
                                        className='edit-button'
                                        onClick={() => history.push('/profile')}>Edit Profile
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

function mapStateToProps(state) {
    // console.log(state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Dashboard);
