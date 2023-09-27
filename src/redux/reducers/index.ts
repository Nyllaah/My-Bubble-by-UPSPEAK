import { combineReducers } from 'redux';
import initialScreenReducer from './switchScreens-reducer';

const rootReducer = combineReducers({
  initialScreen: initialScreenReducer,
});

export default rootReducer;
