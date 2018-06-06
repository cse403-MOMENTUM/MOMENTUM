import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { initialState, /* State */ } from '../../../models/_Store';
import { AddTaskAction, SetCurrTaskAction, TaskTypes } from '../../action-types';

type Action = SetCurrTaskAction | AddTaskAction;

// TODO: should not receive entire state. just a slice!
// tslint:disable-next-line:no-any
const tasks = (state: any | undefined = initialState, action: Action): any => {
  switch (action.type) {
    case TaskTypes.SET_CURRENT_TASK:
      return {
        ...state,
        currentTask: {
          assignee: '',
          description: '',
          estimate: 0,
          name: action.payload.taskName,
          priority: 0,
          progress: 0,
          seconds_spent: 0,
        }
      };
    case TaskTypes.ADD_TASK:
      return {
        ...state,
        tasks: {
          tasks:
          [
            ...state.tasks.tasks,
            {
              assignee: action.payload.assignee,
              description: action.payload.description,
              estimate: action.payload.estimate,
              name: action.payload.name,
              priority: action.payload.priority,
              progress: 0,
              seconds_spent: 0,
            }
          ]
        }
      };
    default:
      return state;
  }
};

const taskInputReducer = combineReducers({
  form: formReducer,
  tasks
});

export default taskInputReducer;
