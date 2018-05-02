import { TodoTypes } from '../../action-types';

// action interfaces
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

// union type of all action interfaces
export type Action = IAddTodoAction | IToggleTodoAction;
