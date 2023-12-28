import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';

const initialState = {
    parts: null,
    part: null
};

const parts = (state = initialState.parts, action) => {
    switch (action.type) {
        case actionTypes.LIST_ALL_PARTS_COMPLETED:
            return action.parts;
        case actionTypes.CLEAR_PARTS:
            return initialState.parts;
        case actionTypes.MODIFY_AMOUNT_COMPLETED:
            return action.parts
        default:
            return state;
    }
}

const part = (state = initialState.part, action) => {
    switch (action.type) {
        case actionTypes.GET_PART_BY_ID_COMPLETED:
            return action.part;
        case actionTypes.CLEAR_PART:
            return initialState.part;
        default:
            return state;
    }
};

const reducer = combineReducers({
    parts,
    part,
});

export default reducer;
