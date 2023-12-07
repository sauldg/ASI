import {combineReducers} from 'redux';
import * as actionTypes from './actionTypes';

const initialState = {
    parts: null
};

const getPartById = (state = initialState.getPartById, action) => {
    switch (action.type) {
        case actionTypes.GET_PART_BY_ID_COMPLETED:
            return getPartById(state, action);
        default:
            return state;
    }
};

const reducer = combineReducers => ({
    getPartById
});

export default reducer;

