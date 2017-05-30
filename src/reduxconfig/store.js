import {combineReducers} from 'redux';
import {input} from './reducers/inputreducer';
import {password} from './reducers/passwordreducer';

const cryptoApp = combineReducers({
    input,
	password
});

export default cryptoApp;