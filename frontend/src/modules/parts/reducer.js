import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';

const initialState = {
    parts: null
};

const getPartById = (state = initialState.parts, action) => {
    switch (action.type) {
        case actionTypes.GET_PART_BY_ID_COMPLETED:
            return action.parts; // Asumiendo que action.part contiene los datos del parte
        case actionTypes.CLEAR_PART:
            return initialState.parts;
        default:
            return state;
    }
};

const reducer = combineReducers({
    getPartById
});

export default reducer;
