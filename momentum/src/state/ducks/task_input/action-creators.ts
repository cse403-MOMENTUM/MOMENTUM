import { SetCurrTaskAction, TaskTypes } from '../../action-types';

export const setCurrentTask = (taskId: number, taskName: string): SetCurrTaskAction => ({
  type: TaskTypes.SET_CURRENT_TASK,
  payload: { taskId, taskName }
});

// export const addTask = (taskId: number, taskName: string): AddTaskAction => ({
//   type: TaskTypes.ADD_TASK,
//   payload: { taskId, taskName }
// });

export default {
  setCurrentTask
  // addTask
};
