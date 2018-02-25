import axios from 'axios';

const initialState = {
    id: '',
    firstname: '',
    lastname: '',
    picture: '',
    gender: '',
    haircolor: '',
    eyecolor: '',
    hobby: '',
    birthday: 1,
    birthmonth: '',
    birthyear: 2000
};

const GET_USER_INFO = 'GET_USER_INFO';


// const UPDATE_USER = 'UPDATE_USER';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            console.log(state)
            return Object.assign({}, state, { user: action.payload })
        default:
            return state;
    }
}