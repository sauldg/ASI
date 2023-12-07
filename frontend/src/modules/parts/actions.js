import * as actionTypes from './actionTypes';
import backend from '../../backend';

const getPartByIdCompleted = (parts) => ({
    type: actionTypes.GET_PART_BY_ID_COMPLETED,
    parts
});

export const getPartById = id => dispatch => {
    backend.partService.getPartById(id, parts => {
        dispatch(getPartByIdCompleted(parts));
    });
}

export const clearPart = () => ({
    type: actionTypes.CLEAR_PART
})