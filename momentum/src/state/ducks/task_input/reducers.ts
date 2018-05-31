import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { initialState, State } from '../../../models/_Store';
import { SetCurrTaskAction, TaskTypes } from '../../action-types';

type Action = SetCurrTaskAction;

// TODO: should not receive entire state. just a slice!
const currentTask = (state: State | undefined = initialState, action: Action): State => {
  switch (action.type) {
    case TaskTypes.SET_CURRENT_TASK:
      return {
        ...state,
        currentTask: {
          id: 0,
          name: action.payload.taskName
        }
      };
    default:
      return state;
  }
};

/* const taskInputReducer = combineReducers({
  currentTask
}); */

const taskInputReducer = combineReducers({
  currentTask,
  form: formReducer
});

export default taskInputReducer;
