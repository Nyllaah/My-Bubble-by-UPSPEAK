import { AnyAction } from 'redux';
import { SHOW_ERROR } from '../actions/loginActions';

export const INITIAL_STATE = {
  showError: false,
};

const showErrorReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case SHOW_ERROR:
      return {
        showError: !state.showError,
      };
    default:
      return state;
  }
};

export default showErrorReducer;
