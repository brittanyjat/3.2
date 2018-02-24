import axios from 'axios';

const initialState = {
    user: {
        firstname: 'Rilo',
        lastname: 'Lewis',
        picture: 'http://static.adweek.com/adweek.com-prod/wp-content/uploads/files/news_article/tt-dorito-dog-days-hed2-2013.jpg',
        gender: 'male',
        haircolor: 'black and white',
        eyecolor: 'brown',
        hobby: '',
        birthday: 17,
        birthmonth: 'April',
        birthyear: 2014
    }
};

const GET_USER_INFO = 'GET_USER_INFO';
const UPDATE_USER = 'UPDATE_USER';


export function getUserInfo() {
    let userData = axios.get('/auth/me').then(res => {
        // console.log(res)
        return res.data
    })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function updateUser(){

}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case UPDATE_USER + 'FULFILLED':
            return {...state, user: action.payload}
        default:
            return state;
    }
}
