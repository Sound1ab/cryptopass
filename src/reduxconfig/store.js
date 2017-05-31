import {combineReducers} from 'redux';
import {input} from './reducers/inputreducer';
import {password} from './reducers/passwordreducer';
import {menu} from './reducers/menureducer';

const cryptoApp = combineReducers({
    input,
	password,
	menu
});

export default cryptoApp;