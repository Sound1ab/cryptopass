import {combineReducers} from 'redux';
import {input} from './reducers/inputreducer';

const cryptoApp = combineReducers({
    input,
});

export default cryptoApp;