import * as actionTypes from './actionTypes';
import backend from '../../backend';

const listAllDraftsCompleted = (drafts) => ({
    type: actionTypes.LIST_ALL_DRAFTS_COMPLETED,
    drafts
});

export const listAllDrafts = () => dispatch => {
    backend.draftService.listAllDrafts(result => {
        dispatch(listAllDraftsCompleted(result));
    });
}

export const clearMyDrafts = () => ({
    type: actionTypes.CLEAR_MY_DRAFTS
});

export const clearDraft = () => ({
    type: actionTypes.CLEAR_DRAFT
});

const findDraftByIdCompleted = (draft) => ({
    type: actionTypes.FIND_DRAFT_BY_ID_COMPLETED,
    draft
});

export const getDraftById = (id) => dispatch => {
    backend.draftService.getDraftById(id, 
        draft => dispatch(findDraftByIdCompleted(draft)));
}


export const draftCompleted = (draft) => ({
    type: actionTypes.DRAFT_COMPLETED,
    draft
});

export const createDraft = (draft, onSuccess, onErrors) => dispatch =>
    backend.draftService.createDraft(draft, result => {
        dispatch(draftCompleted(result));
        onSuccess();
    },
    onErrors);