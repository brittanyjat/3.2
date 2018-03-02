import React, { Component } from 'react';
import Header from '../Header'
import './Dashboard.css';
import axios from 'axios';
import _ from 'underscore';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            allUsers: []
        }
        this.sortUsers = this.sortUsers.bind(this);
    }

    componentDidMount() {
        axios.get('/auth/me').then(res => {
            this.setState({
                user: res.data
            })
        })
        axios.get('/api/recommended').then(res => {
            this.setState({ allUsers: res.data })
        })
    }

    sortUsers(value) {
        var sorted = [];
        value === 'lastname' ? sorted = _.sortBy(this.state.allUsers, function (user) { return user[value] }).reverse()
            : sorted = _.sortBy(this.state.allUsers, function (user) { return user[value] });

        this.setState({
            allUsers: sorted
        })
    }

    addFriend(friend) {
        const { history } = this.props;
        axios.post(`/api/friends/${friend}`).then(res => {
            history.go()
        })
    }

    render() {
        const { history } = this.props;
        const { picture, firstname, lastname, id } = this.state.user;
        const profilePic = picture ? <img src={picture} alt='profilepic' className='profilepic' /> : <div className='profilepic'></div>;

        const friendDisplay = this.state.allUsers.map((friend, i) => {
            return (
                <div key={i} className='friend-container'>
                    <div className='friend-image-container'>
                        <img src={friend.picture} alt='friend' className='profilepic' />
                    </div>
                    <div className='friend-name-container'>
                        <h3>{friend.firstname}</h3>
                        <h3>{friend.lastname}</h3>
                    </div>
                    <div className='add-container'>
                        <button className='add-button' onClick={() => this.addFriend(friend.id)}>Add Friend</button>
                    </div>

                </div>
            )
        })

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

                    <div className='bottom-section'>
                        <div className='recommended-header'>
                            <div><span className='recommended-title'>Recommended Friends</span></div>
                            <div className='sort-container'><span>Sorted by</span>
                                <div className='sort'>
                                    <select onChange={(e) => this.sortUsers(e.target.value)}>
                                        <option default>---Select---</option>
                                        <option value='firstname'>First Name</option>
                                        <option value='lastname'>Last Name</option>
                                        <option value='gender'>Gender</option>
                                        <option value='haircolor'>Hair Color</option>
                                        <option value='eyecolor'>Eye Color</option>
                                        <option value='hobby'>Hobby</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='search-friends overflow'>{friendDisplay}</div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
