import React, { Component } from 'react';
import Header from '../Header';
import './Profile.css';
import axios from 'axios';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get(`/api/profile/${id}`).then(res => {
            this.setState({
                user: res.data
            });
        })
    }

    handleChange(prop, value) {
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [prop]: value
            }
        }))
    }

    handleUpdate() {
        console.log(this.state.user)
        const { history } = this.props;
        const { id } = this.props.match.params;
        let body = {
            firstname: this.state.user.firstname,
            lastname: this.state.user.lastname,
            gender: this.state.user.gender,
            haircolor: this.state.user.haircolor,
            eyecolor: this.state.user.eyecolor,
            hobby: this.state.user.hobby,
            birthday: this.state.user.birthday,
            birthmonth: this.state.user.birthmonth,
            birthyear: this.state.user.birthyear
        }

        if (this.state.user.birthday === null || this.state.user.birthmonth === null || this.state.user.birthyear === null) {
            alert('You must enter your birth day, birth month, and birth year to edit profile')
        } else {
            axios.put(`/api/profile/${id}`, body).then(res => {
                history.push(`/dashboard`)
            })
        }

    }

    handleCancel() {
        const { history } = this.props;
        history.push('/dashboard');
    }

    render() {
        // console.log(this.state.user)
        const { firstname, lastname, picture, birthday, birthmonth, birthyear } = this.state.user;

        const profilePic = picture ? <img src={picture} alt='profilepic' className='profilepic' /> : <div className='profilepic'></div>;

        return (
            <div id='profile'>
                <Header />
                <div className='content'>
                    <div className='top-section'>
                        <div className='profile-container profile-view'>

                            <div className='user-left'>{profilePic}</div>

                            <div className='user-right'>
                                <h2>{firstname}</h2>
                                <h2>{lastname}</h2>
                            </div>

                            <div className='update-cancel-container'>
                                <div className='update-cancel-subcontainer'>
                                    <button className='edit-update-button' onClick={() => this.handleUpdate()}>Update</button>
                                    <button className='edit-update-button' onClick={() => this.handleCancel()}>Cancel</button>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='bottom-section'>
                        <div className='edit-container'>

                            <div className='left-right-edit'>
                                <div className='profile-input'>
                                    <h4>First Name</h4>
                                    <input className='input' type='text' value={firstname || ''} onChange={(e) => this.handleChange('firstname', e.target.value)} />
                                </div>
                                <div className='profile-input'>
                                    <h4>Last Name</h4>
                                    <input className='input' type='text' value={lastname || ''} onChange={(e) => this.handleChange('lastname', e.target.value)} />
                                </div>
                                <div className='profile-input'>
                                    <h4>Gender</h4>
                                    <select onChange={(e) => this.handleChange('gender', e.target.value)}>
                                        <option defaultValue='default'>-- Select --</option>
                                        <option value='Male'>Male</option>
                                        <option value='Female'>Female</option>
                                    </select>
                                </div>
                                <div className='profile-input'>
                                    <h4>Hair Color</h4>
                                    <select onChange={(e) => this.handleChange('haircolor', e.target.value)}>
                                        <option defaultValue='default'>-- Select --</option>
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
                                    <select onChange={(e) => this.handleChange('eyecolor', e.target.value)}>
                                        <option defaultValue='default'>-- Select --</option>
                                        <option value='Brown'>Brown</option>
                                        <option value='Blue'>Blue</option>
                                        <option value='Green'>Green</option>
                                    </select>
                                </div>
                            </div>
                            <div className='left-right-edit'>
                                <div className='profile-input'>
                                    <h4>Hobby</h4>
                                    <select onChange={(e) => this.handleChange('hobby', e.target.value)}>
                                        <option defaultValue='default'>-- Select --</option>
                                        <option value='Video Games'>Video Games</option>
                                        <option value='Hiking'>Hiking</option>
                                        <option value='Fishing'>Fishing</option>
                                        <option value='Rafting'>Rafting</option>
                                    </select>
                                </div>
                                <div className='profile-input'>
                                    <h4>Birthday Day *</h4>
                                    <input className='input' type='text' value={birthday || ''} onChange={(e) => this.handleChange('birthday', e.target.value)} />
                                </div>
                                <div className='profile-input'>
                                    <h4>Birthday Month *</h4>
                                    <input className='input' type='text' value={birthmonth || ''} onChange={(e) => this.handleChange('birthmonth', e.target.value)} />
                                </div>
                                <div className='profile-input'>
                                    <h4>Birthday Year *</h4>
                                    <input className='input' type='text' value={birthyear || ''} onChange={(e) => this.handleChange('birthyear', e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;