import { AddTaskAction, SetCurrTaskAction, TaskTypes } from '../../action-types';

let nextTaskId:number = 0;

export const setCurrentTask = (taskName: string): SetCurrTaskAction => ({
  type: TaskTypes.SET_CURRENT_TASK,
  payload: {
    taskName
  }
});

export const addTask = (taskName: string): AddTaskAction => ({
  type: TaskTypes.ADD_TASK,
  payload: {
    taskId: nextTaskId++,
    taskName
  }
});

export default {
  setCurrentTask,
  addTask
};
