import * as actions from './actions';
import * as actionTypes from './actionTypes';
import reducer from './reducer';
import * as selectors from './selectors';

export {default as PartDetails} from './components/PartDetails';
export {default as ListAllParts} from './components/ListAllParts';

// eslint-disable-next-line
export default {actions, actionTypes, reducer, selectors};
