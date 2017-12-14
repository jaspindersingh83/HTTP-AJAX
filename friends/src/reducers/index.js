import { combineReducers } from 'redux';
import { GET_FRIENDS,ADD_FRIENDS,DELETE_FRIENDS,UPDATE_FRIEND} from '../actions';


const friendsReducer = (friends = [], action) => {
    switch(action.type) {
        case GET_FRIENDS:
            return action.payload.data;

        case ADD_FRIENDS:
            return action.payload.data;

        case DELETE_FRIENDS:
            console.log(action.payload.data)
            return action.payload.data;

        default:
            return friends;
    }
};

const rootReducer = combineReducers({
    friends: friendsReducer
});

export default rootReducer;