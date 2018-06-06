import { AddTaskAction, AddTaskTimeAction, RemoveTaskAction, SetCurrTaskAction, TaskTypes } from '../../action-types';

export const setCurrentTask = (taskName: string): SetCurrTaskAction => ({
  type: TaskTypes.SET_CURRENT_TASK,
  payload: { taskName }
});

export function addTask(priority: number, name: string, assignee: string, estimate: number, description: string): AddTaskAction {
  return {
    type: TaskTypes.ADD_TASK,
    payload: { priority, name, assignee, description, estimate }
  };
}

// Creates an action to remove a task
export function removeTask(taskName: string): RemoveTaskAction {
  return {
    type: TaskTypes.REMOVE_TASK,
    payload: { taskName }
  };
}

// Creates an action to add a task time
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
  addTask,
  addTaskTime,
  removeTask,
  setCurrentTask,
};
