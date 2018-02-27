import React, { Component } from 'react';
import Header from './Header';
import './Search.css';
import axios from 'axios';


export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            friends: {}
        }
    }

    componentDidMount(){
        axios.get(`/api/friends`).then(response => {
            console.log(response)
        })
    }


    render() {
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
                    </div>
                </div>
            </div>
        )
    }
}