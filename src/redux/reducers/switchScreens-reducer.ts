import { AnyAction } from 'redux';
import { SWITCH_SCREEN } from '../actions/loginActions';

export const INITIAL_STATE = {
  currScreen: 'login',
};

const initialScreenReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case SWITCH_SCREEN:
      return {
        ...state,
        currScreen: state.currScreen === 'login' ? 'signin' : 'login',
      };
    default:
      return state;
  }
};

export default initialScreenReducer;
