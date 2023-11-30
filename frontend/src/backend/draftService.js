import {config, appFetch} from './appFetch';

export const listDrafts = (onSuccess) =>
    appFetch('/draft/all', config('GET'), onSuccess);