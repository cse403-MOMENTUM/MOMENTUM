import { SetCurrTaskAction, TaskTypes } from '../../action-types';

export const setCurrentTask = (taskName: string, priority: string, estimation: number, description: string): SetCurrTaskAction => ({
  type: TaskTypes.SET_CURRENT_TASK,
  payload: { taskName, priority, estimation, description }
});

export default {
  setCurrentTask
};
