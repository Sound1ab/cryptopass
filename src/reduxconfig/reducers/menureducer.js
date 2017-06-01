import {TOGGLE_MENU} from '../actions/menuaction';

export const menu = function(state = {
	menuState: false
}, action){
	switch (action.type) {
		case TOGGLE_MENU:
			return Object.assign({}, state, {
				menuState: !state.menuState
			});
		default:
			return state;
	}
};