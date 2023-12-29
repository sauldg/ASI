import * as actionTypes from './actionTypes';
import backend from '../../backend';

const listAllPartsCompleted = (parts) => ({
    type: actionTypes.LIST_ALL_PARTS_COMPLETED,
    parts
});

export const listAllParts = (onSuccess) => dispatch => {
    backend.partService.listAllParts(result => {
        dispatch(listAllPartsCompleted(result));
        onSuccess(result);
    });
}

export const clearParts = () => ({
    type: actionTypes.CLEAR_PARTS
});

const getPartByIdCompleted = (part) => ({
    type: actionTypes.GET_PART_BY_ID_COMPLETED,
    part
});

export const getPartById = (id, onSuccess) => dispatch => {
    backend.partService.getPartById(id, 
        part => {dispatch(getPartByIdCompleted(part));onSuccess(part);});
}

export const clearPart = () => ({
    type: actionTypes.CLEAR_PART
})

const modifyAmountCompleted = (parts) => ({
    type: actionTypes.MODIFY_AMOUNT_COMPLETED,
    parts
});

export const modifyAmount = (id, amount, onSuccess, onErrors) => dispatch =>{
    backend.partService.modifyAmount(id, amount, (parts) => {
        dispatch(modifyAmountCompleted(parts));
        onSuccess(parts);
    }, onErrors);
}