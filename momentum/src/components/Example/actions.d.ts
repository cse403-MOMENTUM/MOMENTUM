// types of actions
export enum ActionTypes {
  ADD_TODO = '[todos] ADD_TODO',
  TOGGLE_TODO = '[todos] TOGGLE_TODO'
}

// action interfaces
export interface AddTodoAction {
  type: ActionTypes.ADD_TODO;
  payload: { todo: any };
}
export interface ToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO;
  payload: { todoId: number };
}

// union type of all action interfaces
export type Action = AddTodoAction | ToggleTodoAction
