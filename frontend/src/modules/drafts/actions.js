import * as actionTypes from './actionTypes';
import backend from '../../backend';

const listAllDraftsCompleted = (drafts) => ({
    type: actionTypes.LIST_ALL_DRAFTS_COMPLETED,
    drafts
});

export const listAllDrafts = () => dispatch => {
    backend.draftService.listAllDrafts(drafts => {
        dispatch(listAllDraftsCompleted(drafts));
    });
}