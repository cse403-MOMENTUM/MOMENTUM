import { ActionTypes, AddTodoAction, ToggleTodoAction } from './actions';

export function addTodo(name: string): AddTodoAction {
  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      todo: {
        id: 0, // wrong, but just an example
        name,
        done: false
      }
    }
  };
}

export function toggleTodo(todoId: number): ToggleTodoAction {
  return {
    type: ActionTypes.TOGGLE_TODO,
    payload: { todoId }
  };
}
