import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// import rootReducer from './reducers';
import switchScreenReducer from './reducers/switchScreens-reducer';

const store = createStore(/* rootReducer */switchScreenReducer, composeWithDevTools());

export default store;
