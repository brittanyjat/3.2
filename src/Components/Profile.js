import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../ducks/reducer';
import Header from './Header';

class Profile extends Component {
    render() {
        console.log(this.props)
        const { firstname, lastname, picture } = this.props.user;

        const profilePic = picture ? <img src={picture} alt='profilepic' className='profilepic' /> : <div className='profilepic'></div>;

        return (
            <div id='profile'>
                <Header />
                <div className='content'>
                    <div className='top-section'>
                        <div className='profile-container profile-view'>

                            <div className='user-left'>{profilePic}</div>

                            <div className='user-right'>
                                {firstname ? <h2>{firstname}</h2> : <h2>Brittany</h2>}
                                {lastname ? <h2>{lastname}</h2> : <h2>Jones</h2>}
                            </div>

                            <div className='update-cancel-container'>
                                <div className='update-cancel-subcontainer'>
                                    <button className='edit-update-button'>Update</button>
                                    <button className='edit-update-button'>Cancel</button>
                                </div>
                            </div>

                        </div>
                        <div className='bottom-section'></div>

                    </div>

                    <div></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Profile);