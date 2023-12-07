import {config, appFetch} from './appFetch';

export const listDrafts = (page, size, onSuccess) =>
    appFetch(`/draft?page=${page}&size=${size}`, config('GET'), onSuccess);

export const listAllDrafts = (onSuccess) =>
    appFetch('/draft/all', config('GET'), onSuccess);

export const getDraftById = (id, onSuccess) =>
    appFetch(`/draft/${id}`, config('GET'), onSuccess);

export const listStockByDraftId = (id, onSuccess) =>
    appFetch(`/draft/draft/${id}`, config('GET'), onSuccess);

export const createDraft = (draft, onSuccess, onErrors) =>
    appFetch('/draft', config('POST', draft), onSuccess, onErrors);

export const updateDraft = (draft, onSuccess, onErrors) =>
    appFetch(`/draft/${draft.id}`, config('PUT', draft), onSuccess, onErrors);

export const deleteDraft = (id, onSuccess, onErrors) =>
    appFetch(`/draft/${id}`, config('DELETE'), onSuccess, onErrors);