import axios from 'axios';
export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIENDS = 'ADD_FRIENDS';

export const getFriends = () => {
    // Add the code for this action
    // let payload = {};
    const apiUrl = 'http://localhost:5000/friends';
    const friendRequest = axios.get(apiUrl)
    return {
        type: GET_FRIENDS,
        payload: friendRequest
    }
};

export const addFriends = (obj) => {
    // Add the code for this action
    const apiUrl = 'http://localhost:5000/new-friend';
    const addfriendRequest = axios.post(apiUrl,obj);
    return {
        type: ADD_FRIENDS,
        payload: addfriendRequest
    }
};