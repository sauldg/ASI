const getModuleState = state => state.parts;

export const getParts = state => getModuleState(state).parts;

export const getPart = state => getModuleState(state).part;

