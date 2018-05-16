// import { combineReducers } from 'redux';
import { initialState, State } from '../../../models/_Store';
import { SetCurrProjectAction, TaskTypes } from '../../action-types';

type Action = SetCurrProjectAction;

// TODO: should not receive entire state. just a slice!
const currentProject = (state: State | undefined = initialState, action: Action): State => {
  switch (action.type) {
    case TaskTypes.SET_CURRENT_TASK:
      return {
        ...state,
        currentProject: {
          id: 0,
          name: action.payload.projectName,
          memberCount: action.payload.projectMemberCount,
          description: action.payload.projectDescription
        }
      };
    default:
      return state;
  }
};

/* const taskInputReducer = combineReducers({
  currentTask
}); */

const projectReducer = currentProject;

export default projectReducer;
