import * as actionTypes from './actionTypes';

export const loading = () => ({
    type: actionTypes.LOADING
});

export const loaded = () => ({
    type: actionTypes.LOADED
});

export const error = error => ({
    type: actionTypes.ERROR,
    error
});

export const updateProfile = (profile) => ({
    type: actionTypes.CURRENT_PROFILE,
    profile
});

export const resetProfile = () => ({
    type: actionTypes.RESET_PROFILE
});