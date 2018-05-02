import { TodoTypes } from '../../action-types';
import { IAddTodoAction, IToggleTodoAction } from './actions';

export function addTodo(text: string): IAddTodoAction {
  return {
    type: TodoTypes.ADD_TODO,
    payload: {
      todo: {
        id: 0, // wrong, but just an example
        text,
        done: false
      }
    }
  };
}

export function toggleTodo(todoId: number): IToggleTodoAction {
  return {
    type: TodoTypes.TOGGLE_TODO,
    payload: { todoId }
  };
}

export default {
  addTodo,
  toggleTodo
};
