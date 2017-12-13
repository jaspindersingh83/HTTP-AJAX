import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIENDS = 'ADD_FRIENDS';

export const getFriends = () => {
    // Add the code for this action
    let payload = {};
    const apiUrl = 'http://localhost:5000/friends';
    const friendRequest = axios.get(apiUrl)
    return {
        type: GET_FRIENDS,
        payload: friendRequest
    }
};

export const addFriends = () => {
    // Add the code for this action
    let payload = {};
    const apiUrl = 'http://localhost:5000/friends';
    const addfriendRequest = axios.get(apiUrl,content)
    return {
        type: GET_FRIENDS,
        payload: addfriendRequest
    }
};