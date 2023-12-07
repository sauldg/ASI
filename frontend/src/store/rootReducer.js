import {combineReducers} from 'redux';

import app from '../modules/app';
import users from '../modules/users';
import drafts from '../modules/drafts';
import parts from '../modules/parts';

const rootReducer = combineReducers({
    app: app.reducer,
    users: users.reducer,
    drafts: drafts.reducer,
    parts: parts.reducer
});

export default rootReducer;
