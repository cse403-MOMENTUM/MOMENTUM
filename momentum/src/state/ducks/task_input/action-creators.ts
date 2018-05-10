import { SetCurrTaskAction, TaskTypes } from '../../action-types';

export const setCurrentTask = (taskName: string): SetCurrTaskAction => ({
  type: TaskTypes.SET_CURRENT_TASK,
  payload: { taskName }
});

export default {
  setCurrentTask
};
