import { SetCurrProjectAction, TaskTypes } from '../../action-types';

export const setCurrentProject = (projectName: string, projectDescription: string, projectMemberCount: number): SetCurrProjectAction => ({
  type: TaskTypes.SET_CURRENT_PROJECT,
  payload: { projectName, projectDescription, projectMemberCount }
});

export default {
  setCurrentProject
};
