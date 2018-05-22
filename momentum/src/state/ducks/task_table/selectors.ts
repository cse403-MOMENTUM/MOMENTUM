import { State } from '../../../models/_Store';

const getTaskList = ((state: State) => state.taskList);

export default {
  getTaskList
};
