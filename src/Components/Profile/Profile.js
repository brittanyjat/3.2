import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/reducer';
import Header from '../Header';
import './Profile.css';

class Profile extends Component {
    constructor(props){
        super(props);

        const { user } = this.props;

        this.state = {
            firstname: user.firstname,
            lastname: user.lastname,
            picture: user.picture,
            gender: user.gender,
            haircolor: user.haircolor,
            eyecolor: user.eyecolor,
            hobby: user.hobby,
            birthday: user.birthday,
            birthmonth: user.birthmonth,
            birthyear: user.birthyear
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(prop, value){
        this.setState({
            [prop]: value
        });
    }


    render() {
        // console.log(this.props)
        // console.log(this.state)
        const { firstname, lastname, picture, gender, haircolor, eyecolor, hobby, birthday, birthmonth, birthyear } = this.state;

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

                    </div>

                    <div className='bottom-section'>
                        <div className='edit-container'>

                            <div className='left-right-edit'>
                                <div className='profile-input'>
                                    <h4>First Name</h4>
                                    <input type='text' value={firstname} onChange={(e) => this.handleChange('firstname', e.target.value)}/>
                                </div>
                                <div className='profile-input'>
                                    <h4>Last Name</h4>
                                    <input type='text' placeholder={lastname} onChange={(e) => this.handleChange('lastname', e.target.value)}/>
                                </div>
                                <div className='profile-input'>
                                    <h4>Gender</h4>
                                    <select value={gender} onChange={(e) => this.handleChange('gender', e.target.value)}>
                                        <option disabled>-- Select --</option>
                                        <option value='Male'>Male</option>
                                        <option value='Female'>Female</option>
                                    </select>
                                </div>
                                <div className='profile-input'>
                                    <h4>Hair Color</h4>
                                    <select value={haircolor} onChange={(e) => this.handleChange('haircolor', e.target.value)}>
                                        <option disabled>-- Select --</option>
                                        <option value='Brown'>Brown</option>
                                        <option value='Blue'>Blue</option>
                                        <option value='Green'>Green</option>
                                        <option value='Blonde'>Blonde</option>
                                        <option value='Red'>Red</option>
                                        <option value='White'>White</option>
                                    </select>
                                </div>
                                <div className='profile-input'>
                                    <h4>Eye Color</h4>
                                    <select value={eyecolor}>
                                        <option disabled>-- Select --</option>
                                        <option value='Brown'>Brown</option>
                                        <option value='Blue'>Blue</option>
                                        <option value='Green'>Green</option>
                                    </select>
                                </div>
                            </div>
                            <div className='left-right-edit'>
                                <div className='profile-input'>
                                    <h4>Hobby</h4>
                                    <select value={hobby}>
                                        <option disabled>-- Select --</option>
                                        <option value='Video Games'>Video Games</option>
                                        <option value='Hiking'>Hiking</option>
                                        <option value='Fishing'>Fishing</option>
                                        <option value='Rafting'>Rafting</option>
                                    </select>
                                </div>
                                <div className='profile-input'>
                                    <h4>Birthday Day</h4>
                                    <input type='text' placeholder={birthday} />
                                </div>
                                <div className='profile-input'>
                                    <h4>Birthday Month</h4>
                                    <input type='text' placeholder={birthmonth} />
                                </div>
                                <div className='profile-input'>
                                    <h4>Birthday Year</h4>
                                    <input type='text' placeholder={birthyear} />
                                </div>
                            </div>

                            <div className='right-edit'></div>

                        </div>
                    </div>
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