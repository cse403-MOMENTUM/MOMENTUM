import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { initialState, State } from '../../../models/_Store';
import { AddTaskAction, SetCurrTaskAction, TaskTypes } from '../../action-types';

// TODO: should not receive entire state. just a slice!
const currentTask = (state: State | undefined = initialState, action: SetCurrTaskAction): State => {
  switch (action.type) {
    case TaskTypes.SET_CURRENT_TASK:
      return {
        ...state,
        currentTask: {
          priority: 0,
          name: action.payload.taskName,
          assignee: '',
          description: '',
          seconds_spent: 0,
          progress: 0,
          estimate: 0
        }
      };
    default:
      return state;
  }
};

const addTask = (state: State | undefined = initialState, action: AddTaskAction): State => {
  switch (action.type) {
    case TaskTypes.ADD_TASK:
      return {
        ...state,
        tasks: {
          tasks:
          [
            ...state.tasks.tasks,
            {
              priority: action.payload.priority,
              name: action.payload.name,
              assignee: action.payload.assignee,
              description: action.payload.description,
              seconds_spent: 0,
              progress: 0,
              estimate: action.payload.estimate
            }
          ]
        }
      };
    default:
      return state;
  }
};

const taskInputReducer = combineReducers({
  addTask,
  currentTask,
  form: formReducer
});

export default taskInputReducer;
