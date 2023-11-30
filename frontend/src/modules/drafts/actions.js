import * as actionTypes from './actionTypes';
import backend from '../../backend';

const listDraftsCompleted = (drafts) => ({
    type: actionTypes.LIST_DRAFTS_COMPLETED,
    drafts
});

export const listAllDrafts = () => dispatch => {
    backend.draftService.listDrafts(drafts => {
        dispatch(listDraftsCompleted(drafts));
    });
}