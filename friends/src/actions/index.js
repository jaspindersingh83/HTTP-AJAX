import axios from 'axios';
export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIENDS = 'ADD_FRIENDS';
export const DELETE_FRIENDS = 'DELETE_FRIENDS';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';

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

export const deleteFriend = (index) => {
    // Add the code for this action
    console.log(index);
    const apiUrl = `http://localhost:5000/delete-friend/${in}`;
    const deleteFriend = axios.delete(apiUrl);
    // console.log(deleteFriend)
    return {
        type: DELETE_FRIENDS,
        payload: deleteFriend
    }
};
export const updateFriend = () => {
    // Add the code for this action
    const apiUrl = 'http://localhost:5000/update-friend';
    const updateFriend = axios.put(apiUrl);
    return {
        type: UPDATE_FRIEND,
        payload: updateFriend
    }
};