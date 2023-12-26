const getModuleState = state => state.drafts;

export const getDrafts = state => getModuleState(state).drafts;

export const getDraft = state => getModuleState(state).draft;

