// see https://github.com/Automattic/wp-calypso/blob/master/client/state/action-types.js

export const enum TodoTypes {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO'
}

export interface AddTodoAction {
  type: TodoTypes.ADD_TODO;
  payload: {
    todo: {
      id: number,
      text: string,
      done: boolean
    }
  };
}

export interface ToggleTodoAction {
  type: TodoTypes.TOGGLE_TODO;
  payload: { todoId: number };
}

export const enum Visibility {
  SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
}

// ACTUAL TYPES
export const enum TaskTypes {
  SET_CURRENT_TASK = 'SET_CURRENT_TASK'
}

export interface SetCurrTaskAction {
  type: TaskTypes.SET_CURRENT_TASK;
  payload: {
      taskName: string
  };
}
