import { combineReducers } from 'redux';
import initialScreenReducer from './switchScreensReducer';

const rootReducer = combineReducers({
  initialScreen: initialScreenReducer,
});

export default rootReducer;
