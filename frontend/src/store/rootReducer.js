import {combineReducers} from 'redux';

import app from '../modules/app';
import users from '../modules/users';
import drafts from '../modules/drafts';

const rootReducer = combineReducers({
    app: app.reducer,
    users: users.reducer,
    drafts: drafts.reducer
});

export default rootReducer;
