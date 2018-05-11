import { State } from '../../../models/_Store';

const getCurrentTask = ((state: State) => state.currentTask);

export default {
  getCurrentTask
};
