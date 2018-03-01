import React, { Component } from 'react';
import Header from './Header';
import './Search.css';
import axios from 'axios';
import _ from 'underscore';


export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            allUsers: [],
            friends: [],
            searchValue: '',
            searchOn: false
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.addFriend = this.addFriend.bind(this);
    }

    componentDidMount() {
        axios.get('/api/friends?page=0').then(res => {
            this.setState({
                users: res.data
            })
        });
        axios.get('/api/all').then(res => {
            this.setState({
                allUsers: res.data
            })
        });
        axios.get('/api/myfriends').then(res => {
            this.setState({
                friends: _.pluck(res.data, 'user2')
            })
        })
    }

    handleClick(index) {
        axios.get(`/api/friends?page=${index - 1}`).then(res => {
            this.setState({
                users: res.data
            })
        })
    }

    handleSearch() {
        const { allUsers } = this.state;
        const term = this.refs.search.value;

        this.setState({ searchOn: true })

        if (this.state.searchValue === 'firstname') {
            this.setState({ users: _.where(allUsers, { firstname: term }) })
        } else {
            this.setState({ users: _.where(allUsers, { lastname: term }) })
        }
    }

    addFriend(friend) {
        // const { history } = this.props;
        axios.post(`/api/friends/${friend}`).then(res => {
            this.setState({ friends: [...this.state.friends, friend] })
        })
    }

    deleteFriend(friend) {
        var newArray = this.state.friends;
        axios.delete(`/api/friends/${friend}`).then(res => {
            this.setState({ friends: _.without(this.state.friends, friend)})
        })
    }

    render() {
        const { history } = this.props;
        console.log(this.state.friends)

        const totalPages = Math.ceil(this.state.searchOn ? this.state.users.length / 10 : this.state.allUsers.length / 10)

        var pages = []
        for (var i = 1; i <= totalPages; i++) {
            let index = i;
            pages.push(<button className='page-button' key={i} onClick={() => this.handleClick(index)}>{i}</button>)
        }

        const friendDisplay = this.state.users.map((friend, i) => {
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
                        {this.state.friends.includes(friend.id) ? <button className='delete-button' onClick={() => this.deleteFriend(friend.id)}>Delete Friend</button>
                            : <button className='add-button' onClick={() => this.addFriend(friend.id)}>Add Friend</button>}
                        {/* <button className='add-button'>Add Friend</button> */}
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
                                <select onChange={(e) => this.setState({ searchValue: e.target.value })}>
                                    <option default>---Select---</option>
                                    <option value='firstname'>First Name</option>
                                    <option value='lastname'>Last Name</option>
                                </select>

                                <input className='input search-input' type='text' ref='search'></input></div>

                            <div className='search-buttons'>
                                <button className='edit-update-button wide-button' onClick={() => this.handleSearch()}>Search</button>
                                <button className='edit-update-button wide-button' onClick={() => history.go()}>Reset</button>
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