import {usersAPI} from "../api/Api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likeCount: 15},
        {id: 2, message: 'First post', likeCount: 23},
        {id: 3, message: 'Bla', likeCount: 5},
        {id: 4, message: 'Bla', likeCount: 14},
    ],
    newPostText: 'it-kama',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () =>
    ({type: ADD_POST})
export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) =>
    (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;