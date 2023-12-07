import {config, appFetch} from './appFetch';

export const listParts = (page, size, onSuccess) =>
    appFetch(`/part?page=${page}&size=${size}`, config('GET'), onSuccess);

export const listAllParts = (onSuccess) =>
    appFetch('/part/all', config('GET'), onSuccess);

export const getPartById = (id, onSuccess) =>
    appFetch(`/part/${id}`, config('GET'), onSuccess);

export const createPart = (part, onSuccess, onErrors) =>
    appFetch('/part', config('POST', part), onSuccess, onErrors);

export const updatePart = (part, onSuccess, onErrors) =>
    appFetch(`/part`, config('PUT', part), onSuccess, onErrors);

export const modifyAmount = (id, amount, onSuccess, onErrors) =>
    appFetch(`/part/modifyAmount/${id}`, config('PATCH', amount), onSuccess, onErrors);

export const deletePart = (id, onSuccess, onErrors) =>
    appFetch(`/part/${id}`, config('DELETE'), onSuccess, onErrors);