import {config, appFetch} from './appFetch';

export const listDrafts = (page, size, onSuccess) =>
    appFetch(`/drafts?page=${page}&size=${size}`, config('GET'), onSuccess);

export const listAllDrafts = (onSuccess) =>
    appFetch('/drafts/all', config('GET'), onSuccess);

export const getDraftById = (id, onSuccess) =>
    appFetch(`/drafts/${id}`, config('GET'), onSuccess);

export const listStockByDraftId = (id, onSuccess) =>
    appFetch(`/drafts/draft/${id}`, config('GET'), onSuccess);

export const createDraft = (draft, onSuccess, onErrors) =>
    appFetch('/drafts', config('POST', draft), onSuccess, onErrors);

export const updateDraft = (draft, onSuccess, onErrors) =>
    appFetch(`/drafts/${draft.id}`, config('PUT', draft), onSuccess, onErrors);

export const deleteDraft = (id, onSuccess, onErrors) =>
    appFetch(`/drafts/${id}`, config('DELETE'), onSuccess, onErrors);