import { TodoTypes } from '../../action-types';
import { AddTodoAction, ToggleTodoAction } from '../../action-types';

export function addTodo(text: string): AddTodoAction {
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

export function toggleTodo(todoId: number): ToggleTodoAction {
  return {
    type: TodoTypes.TOGGLE_TODO,
    payload: { todoId }
  };
}

export default {
  addTodo,
  toggleTodo
};
