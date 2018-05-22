// import { combineReducers } from 'redux';
import { initialState, State } from '../../../models/_Store';
import { AddTaskAction, SetCurrTaskAction, TaskTypes } from '../../action-types';
// import { setCurrentTask } from './action-creators';

type Action = SetCurrTaskAction | AddTaskAction;

// TODO: should not receive entire state. just a slice!
const tasks = (state: State | undefined = initialState, action: Action): State => {
  switch (action.type) {
    case TaskTypes.ADD_TASK:
      return {
        ...state,
        currentTask: {
          id: 0,
          name: action.payload.taskName
        }
      };
    case TaskTypes.SET_CURRENT_TASK:
      return {
        ...state,
        currentTask: {
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

const taskTableReducer = tasks;

export default taskTableReducer;
