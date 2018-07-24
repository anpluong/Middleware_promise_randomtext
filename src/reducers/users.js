import {
    FETCH_USERS
} from '../actions/types';

export default function(state=[], action) {
    switch(action.type) {
        case FETCH_USERS:
        // add current state and a list of users in payload
         return action.payload.data;
    }
    return state;
}