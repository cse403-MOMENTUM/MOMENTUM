import { AddTaskAction, AddTaskTimeAction, RemoveTaskAction, SetCurrTaskAction, TaskTypes } from '../../action-types';

export const setCurrentTask = (taskName: string): SetCurrTaskAction => ({
  type: TaskTypes.SET_CURRENT_TASK,
  payload: { taskName }
});

export function addTask(taskName: string, priority: string, estimation: number, description: string): AddTaskAction {
  return {
    type: TaskTypes.ADD_TASK,
    payload: { taskName, priority, estimation, description }
  };
}

export function removeTask(taskName: string): RemoveTaskAction {
  return {
    type: TaskTypes.REMOVE_TASK,
    payload: { taskName }
  };
}

export function addTaskTime(taskName: string, time: number): AddTaskTimeAction {
  return {
    type: TaskTypes.ADD_TASK_TIME,
    payload: { taskName, time }
  };
}

// export const addTask = (taskName: string, priority: string, estimation: number, description: string): AddTaskAction => ({
//   type: TaskTypes.ADD_TASK,
//   payload: { taskName, priority, estimation, description }
// });

// export const removeTask = (taskName: string): RemoveTaskAction => ({
//   type: TaskTypes.REMOVE_TASK,
//   payload: { taskName }
// });

// export const addTaskTime = (taskName: string, time: number): AddTaskTimeAction => ({
//   type: TaskTypes.ADD_TASK_TIME,
//   payload: { taskName, time }
// });

export default {
  setCurrentTask
};
