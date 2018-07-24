import {
    FETCH_USERS
} from './types';

import axios from 'axios'

export function fetchUsers() {
    const request = axios.get('https://talaikis.com/api/quotes/random/')
    // Wait until the promise is resolved, that is why the middleware jumps in
    return {
        type: FETCH_USERS,
        payload: request
    }
}