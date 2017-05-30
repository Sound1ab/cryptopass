import {COPY_PASSWORD, REVEAL_PASSWORD, UPDATE_PASSWORD} from '../actions/passwordaction';

export const password = function(state = {
	copyPassword: false,
	revealPassword: false,
}, action){
	switch (action.type) {
		case COPY_PASSWORD:
			return Object.assign({}, state, {
				copyPassword: !state.copyPassword
			});
		case REVEAL_PASSWORD:
			return Object.assign({}, state, {
				revealPassword: !state.revealPassword
			});
		case UPDATE_PASSWORD:
			return Object.assign({}, state, {
				password: action.password
			});
		default:
			return state;
	}
};