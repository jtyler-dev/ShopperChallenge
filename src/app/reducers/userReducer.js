import { combineReducers } from 'redux';
import {SET_USER_DATA} from '../actions/userActions';


function userData(state={}, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return action.data
        default:
            return state

    }
}

const ShopperApp = combineReducers({
    userData
});

export default ShopperApp;
