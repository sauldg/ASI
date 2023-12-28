import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';
import * as partActionTypes from '../parts/actionTypes';

const initialState = {
    drafts: [],
    parts: [],
    draft: []
};


const parts = (state = initialState.parts, action) => {
    switch (action.type) {
        case partActionTypes.LIST_ALL_PARTS_COMPLETED:
            return action.parts;
        default:
            return state;
    }
}

const drafts = (state = initialState.drafts, action) => {
    switch (action.type) {
        case actionTypes.LIST_ALL_DRAFTS_COMPLETED:
            return action.drafts;
        case actionTypes.CLEAR_MY_DRAFTS:
            return initialState.drafts;
        default:
            return state;
    }
};

const draft = (state = initialState.draft, action) => {
    switch (action.type) {
        case actionTypes.FIND_DRAFT_BY_ID_COMPLETED:
            return action.draft;
        case actionTypes.DRAFT_COMPLETED:
            return action.draft;
        case actionTypes.CLEAR_DRAFT:
            return initialState.draft;
        default:
            return state;
    }
}

const reducer = combineReducers({
    drafts,
    parts,
    draft,
});

export default reducer;
