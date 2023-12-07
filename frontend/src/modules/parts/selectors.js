const getModuleState = state => state.parts;

export const getPartById = state => getModuleState(state).part;

