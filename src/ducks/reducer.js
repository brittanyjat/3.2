import axios from 'axios';

const initialState = {
    user: {}
};

const GET_USER_INFO = 'GET_USER_INFO';

export function getUserInfo() {
    const userInfo = axios.get('/auth/me').then(res => {
        console.log(res)
    })
    return {
        type: GET_USER_INFO,
        payload: userInfo
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO:
            return { ...state, user: action.payload }
        default:
            return state;
    }
}