// see https://github.com/Automattic/wp-calypso/blob/master/client/state/action-types.js

export const enum TodoTypes {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO'
}

export interface IAddTodoAction {
  type: TodoTypes.ADD_TODO;
  payload: {
    todo: {
      id: number,
      text: string,
      done: boolean
    }
  };
}

export interface IToggleTodoAction {
  type: TodoTypes.TOGGLE_TODO;
  payload: { todoId: number };
}

export const enum Visibility {
  SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
}