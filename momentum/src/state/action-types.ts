import { Action } from 'redux';

// see https://github.com/Automattic/wp-calypso/blob/master/client/state/action-types.js

export const enum TodoTypes {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO'
}

export interface AddTodoAction extends Action {
  type: TodoTypes.ADD_TODO;
  payload: {
    todo: {
      id: number,
      text: string,
      done: boolean
    }
  };
}

export interface ToggleTodoAction extends Action {
  type: TodoTypes.TOGGLE_TODO;
  payload: { todoId: number };
}

export const enum Visibility {
  SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
}

// *** ACTUAL TYPES ***

export const enum TaskTypes {
  ADD_PROJECT = 'ADD_PROJECT',
  SET_CURRENT_PROJECT = 'SET_CURRENT_PROJECT',
  REMOVE_PROJECT = 'REMOVE_PROJECT',
  ADD_TASK = 'ADD_TASK',
  SET_CURRENT_TASK = 'SET_CURRENT_TASK',
  REMOVE_TASK = 'REMOVE_TASK',
  ADD_TASK_TIME = 'ADD_TASK_TIME'
}

// Project
export interface AddProjectAction extends Action {
  type: TaskTypes.ADD_PROJECT;
  payload: {
      id: number,
      projectName: string,
      projectDescription: string,
      projectMemberCount: number
  };
}

export interface SetCurrProjectAction extends Action {
  type: TaskTypes.SET_CURRENT_PROJECT;
  payload: {
      projectName: string,
      projectDescription: string,
      projectMemberCount: number
  };
}

export interface RemoveProjectAction extends Action {
  type: TaskTypes.REMOVE_PROJECT;
  payload: {
      projectName: string
  };
}

// Task
export interface AddTaskAction extends Action {
  type: TaskTypes.ADD_TASK;
  payload: {
      priority: number,
      name: string,
      assignee: string,
      description: string,
      estimate: number
  };
}

export interface SetCurrTaskAction extends Action {
  type: TaskTypes.SET_CURRENT_TASK;
  payload: {
      taskName: string
  };
}

export interface RemoveTaskAction extends Action {
  type: TaskTypes.REMOVE_TASK;
  payload: {
      taskName: string
  };
}

export interface AddTaskTimeAction extends Action {
  type: TaskTypes.ADD_TASK_TIME;
  payload: {
      taskName: string,
      time: number
  };
}
