import { State } from '../../../models/_Store';

const getCurrentProject = ((state: State) => state.currentProject);

export default {
  getCurrentProject
};
