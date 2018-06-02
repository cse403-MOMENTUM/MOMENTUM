import { State } from '../../../models/_Store';

const getCurrentProject = ((state: State) => state.currentProject);

// tslint:disable-next-line:no-any
const getProjects = ((state: any) => {
  console.log(state);
  return state.tasks.projects.projects;
});

export default {
  getCurrentProject,
  getProjects
};
