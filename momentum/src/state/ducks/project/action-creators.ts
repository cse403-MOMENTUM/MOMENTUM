import { AddProjectAction, RemoveProjectAction, SetCurrProjectAction, TaskTypes } from '../../action-types';

export const setCurrentProject = (projectName: string, projectDescription: string, projectMemberCount: number): SetCurrProjectAction => ({
  type: TaskTypes.SET_CURRENT_PROJECT,
  payload: { projectName, projectDescription, projectMemberCount }
});

export function addProject(projectName: string, projectDescription: string, projectMemberCount: number): AddProjectAction {
  return {
    type: TaskTypes.ADD_PROJECT,
    payload: { projectName, projectDescription, projectMemberCount }
  };
}

export function removeProject(projectName: string): RemoveProjectAction {
  return {
    type: TaskTypes.REMOVE_PROJECT,
    payload: { projectName }
  };
}

// export const addProject = (projectName: string, projectDescription: string, projectMemberCount: number): AddProjectAction => ({
//   type: TaskTypes.ADD_PROJECT,
//   payload: { projectName, projectDescription, projectMemberCount }
// });

// export const removeProject = (projectName: string): RemoveProjectAction => ({
//   type: TaskTypes.REMOVE_PROJECT,
//   payload: { projectName }
// });

export default {
  setCurrentProject
};
