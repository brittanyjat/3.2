import React, { Component } from 'react';
import Header from './Header';
import './Search.css';
import axios from 'axios';


export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            friends: [],
            userCount: 0
        }
    }

    componentDidMount() {
        axios.get('/api/friends?page=0').then(res => {
            this.setState({
                friends: res.data
            })
        });
        axios.get('/api/count').then(res => {
            this.setState({
                userCount: res.data.count
            })
        })
    }

    handleClick(i) {
        // console.log(i)
        axios.get(`/api/friends?page=${i - 1}`).then(res => {
            this.setState({
                friends: res.data
            })
        })
    }

    render() {
        const totalPages = Math.ceil(this.state.userCount / 10)
        var pages = []
        for (var i = 1; i <= totalPages; i++) {
            let index = i;
            pages.push(<button className='page-button' key={i} onClick={() => this.handleClick(index)}>{i}</button>)
        }

        const friendDisplay = this.state.friends.map((friend, i) => {
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
                        <button className='add-button'>Add Friend</button>
                    </div>

                </div>
            )
        })

        return (
            <div>
                <Header />
                <div className='content'>
                    <div className='bottom-section search'>
                        <div className='search-top'>
                            <div className='search-child'>
                                <select>
                                    <option>First Name</option>
                                    <option>Last Name</option>
                                </select>
                                <input className='input search-input' type='text'></input></div>
                            <div className='search-buttons'>
                                <button className='edit-update-button wide-button'>Search</button>
                                <button className='edit-update-button wide-button'>Reset</button>
                            </div>
                        </div>
                        <div className='search-friends'>{friendDisplay}
                        </div>
                        <div className='page-button-container'>
                            {pages}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}