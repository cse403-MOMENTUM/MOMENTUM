import { State } from '../../../models/_Store';

const getCurrentProject = ((state: State) => state.currentProject);
const getProjects = ((state: State) => state.projects);

export default {
  getCurrentProject,
  getProjects
};
