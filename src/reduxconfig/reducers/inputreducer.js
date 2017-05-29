import {UPDATE_MESSAGE, UPDATE_KEY, UPDATE_PASSWORD} from '../actions/inputaction';

export function input(state = {
    message: '',
    encryptionKey: '',
    password: '',
}, action) {
    switch (action.type) {
        case UPDATE_MESSAGE:
            return Object.assign({}, state, {
                message: action.message
            });
        case UPDATE_KEY:
            return Object.assign({}, state, {
                encryptionKey: action.encryptionKey
            });
        case UPDATE_PASSWORD:
            return Object.assign({}, state, {
                password: action.password
            });
        default:
            return state
    }
}