import {combineReducers} from 'redux';
import * as actionTypes from './actionTypes';

const initialState = {
    drafts: null
};

const listDrafts = (state = initialState.listDrafts, action) => {
    switch (action.type) {
        case actionTypes.LIST_DRAFTS_COMPLETED:
            return listDrafts(state, action);
        default:
            return state;
    }
};

const reducer = combineReducers => ({
    listDrafts
});

export default reducer;

