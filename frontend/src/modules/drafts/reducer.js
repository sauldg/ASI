import {combineReducers} from 'redux';
import * as actionTypes from './actionTypes';

const initialState = {
    drafts: null
};

const listAllDrafts = (state = initialState.listAllDrafts, action) => {
    switch (action.type) {
        case actionTypes.LIST_ALL_DRAFTS_COMPLETED:
            return listAllDrafts(state, action);
        default:
            return state;
    }
};

const reducer = combineReducers => ({
    listAllDrafts
});

export default reducer;
