import { AddTaskAction, AddTaskTimeAction, RemoveTaskAction, SetCurrTaskAction, TaskTypes } from '../../action-types';

export const addTask = (taskName: string, priority: string, estimation: number, description: string): AddTaskAction => ({
  type: TaskTypes.ADD_TASK,
  payload: { taskName, priority, estimation, description }
});

export const setCurrentTask = (taskName: string, priority: string, estimation: number, description: string): SetCurrTaskAction => ({
  type: TaskTypes.SET_CURRENT_TASK,
  payload: { taskName, priority, estimation, description }
});

export const removeTask = (taskName: string): RemoveTaskAction => ({
  type: TaskTypes.REMOVE_TASK,
  payload: { taskName }
});

export const addTaskTime = (taskName: string, time: number): AddTaskTimeAction => ({
  type: TaskTypes.ADD_TASK_TIME,
  payload: { taskName, time }
});

export default {
  addTask,
  setCurrentTask,
  removeTask,
  addTaskTime,
};
