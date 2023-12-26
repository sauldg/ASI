import {config, appFetch} from './appFetch';

export const listParts = (page, size, onSuccess) =>
    appFetch(`/parts?page=${page}&size=${size}`, config('GET'), onSuccess);

export const listAllParts = (onSuccess) =>
    appFetch('/parts/all', config('GET'), onSuccess);

export const getPartById = (id, onSuccess) =>
    appFetch(`/parts/${id}`, config('GET'), onSuccess);

export const createPart = (part, onSuccess, onErrors) =>
    appFetch('/parts', config('POST', part), onSuccess, onErrors);

export const updatePart = (part, onSuccess, onErrors) =>
    appFetch(`/parts`, config('PUT', part), onSuccess, onErrors);

export const modifyAmount = (id, amount, onSuccess, onErrors) =>
    appFetch(`/parts/modifyAmount/${id}`, config('PATCH', amount), onSuccess, onErrors);

export const deletePart = (id, onSuccess, onErrors) =>
    appFetch(`/parts/${id}`, config('DELETE'), onSuccess, onErrors);