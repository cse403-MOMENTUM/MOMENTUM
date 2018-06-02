import { State } from '../../../models/_Store';
import { tasksToReactTasks } from './operations';

const getCurrentTask = ((state: State) => state.currentTask);

// tslint:disable-next-line:no-any
const getTasks = ((state: any) => {
  return tasksToReactTasks(state.tasks.tasks.tasks);
});

export default {
  getCurrentTask,
  getTasks
};
