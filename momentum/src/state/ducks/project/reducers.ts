import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { initialState } from '../../../models/_Store';
import { AddProjectAction, SetCurrProjectAction, TaskTypes } from '../../action-types';

type Action = SetCurrProjectAction | AddProjectAction;

// tslint:disable-next-line:no-any
const project = (state: any | undefined = initialState, action: Action): any => {
  switch (action.type) {
    case TaskTypes.SET_CURRENT_PROJECT:
      return {
        ...state,
        currentProject: {
          description: action.payload.projectDescription,
          id: 0,
          memberCount: action.payload.projectMemberCount,
          name: action.payload.projectName
        }
      };
      case TaskTypes.ADD_PROJECT:
      return {
        ...state,
        projects: {
          projects: [
            ...state.projects.projects,
            {
              description: action.payload.projectDescription,
              id: action.payload.id,
              memberCount: action.payload.projectMemberCount,
              name: action.payload.projectName
            }
          ]
        }
      };
    default:
      return state;
  }
};

const projectReducer = combineReducers({
  form: formReducer,
  project
});

export default projectReducer;
