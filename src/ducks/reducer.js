import axios from 'axios';

const initialState = {
    user: {
        firstname: 'Rilo',
        lastname: 'Lewis',
        picture: 'http://static.adweek.com/adweek.com-prod/wp-content/uploads/files/news_article/tt-dorito-dog-days-hed2-2013.jpg'
    }
};

const GET_USER_INFO = 'GET_USER_INFO';

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

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        default:
            return state;
    }
}
