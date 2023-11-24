import { combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import switchScreenReducer from './reducers/switchScreensReducer';

const rootReducer = combineReducers({
  switchScreen: switchScreenReducer,

});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
