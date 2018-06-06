// import { combineReducers } from 'redux';
import { initialState, State } from '../../../models/_Store';
import { AddProjectAction, SetCurrProjectAction, TaskTypes } from '../../action-types';

type Action = SetCurrProjectAction | AddProjectAction;

// TODO: should not receive entire state. just a slice!
const currentProject = (state: State | undefined = initialState, action: Action): State => {
  switch (action.type) {
    case TaskTypes.SET_CURRENT_PROJECT:
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

const addProject = (state: State | undefined = initialState, action: Action): State => {
  switch (action.type) {
    case TaskTypes.ADD_PROJECT:
      return {
        ...state,
        projects: {
          projects: [
            ...state.projects.projects,
            {
              id: action.payload.id,
              name: action.payload.projectName,
              memberCount: action.payload.projectMemberCount,
              description: action.payload.projectDescription
            }
          ]
        }
      };
    default:
      return state;
  }
};

/* const taskInputReducer = combineReducers({
  currentTask
}); */

// const projectReducer = currentProject;

export default {
  addProject,
  currentProject
};
