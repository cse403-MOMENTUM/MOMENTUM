import { AddTaskAction, SetCurrTaskAction, TaskTypes } from '../../action-types';

let nextTaskId:number = 0;

export const setCurrentTask = (taskName: string): SetCurrTaskAction => ({
  type: TaskTypes.SET_CURRENT_TASK,
  payload: {
    taskName
  }
});

export const addTask = (taskName: string, taskDescription: string): AddTaskAction => ({
  type: TaskTypes.ADD_TASK,
  payload: {
    taskId: nextTaskId++,
    taskName,
    taskDescription
  }
});

export default {
  addTask,
  setCurrentTask
};
