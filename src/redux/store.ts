import { combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import switchScreenReducer from './reducers/switchScreensReducer';
import showErrorReducer from './reducers/showErrorReducer';

const rootReducer = combineReducers({
  switchScreen: switchScreenReducer,
  showError: showErrorReducer,

});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
