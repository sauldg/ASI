import {combineReducers} from 'redux';

import * as actionTypes from './actionTypes';

const initialState = {
    error: null,
    loading: false,
    profile: "admin"
};

const error = (state = initialState.error, action) => {

    switch (action.type) {

        case actionTypes.ERROR:
            return action.error;

        default:
            return state;

    }

}

const loading = (state = initialState.loading, action) => {

    switch (action.type) {

        case actionTypes.LOADING:
            return true;

        case actionTypes.LOADED:
            return false;

        case actionTypes.ERROR:
            return false;

        default:
            return state;

    }

}

const profile = (state = initialState.profile, action) => {

    switch (action.type) {

        case actionTypes.CURRENT_PROFILE:
            return action.profile;

        case actionTypes.RESET_PROFILE:
            return initialState.profile;

        default:
            return state;

    }

}

const reducer = combineReducers({
    error,
    loading,
    profile
});

export default reducer;