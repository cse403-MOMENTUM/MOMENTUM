import { combineReducers } from 'redux';
import { TodoTypes } from '../../action-types';
import { Action } from './actions';

// this method can be confusing because it serves two purposes:
// 1 - it create a new todo
// 2 - it toggles the completed state of an existing todo
const todo = (state: {completed: boolean, id: number} | undefined, action: Action) => {
  switch (action.type) {
    case TodoTypes.ADD_TODO:
      return {
        id: action.payload.todo.id,
        text: action.payload.todo.text,
        completed: false
      };
    case TodoTypes.TOGGLE_TODO:
      if (state!.id !== action.payload.todoId) {
        return state;
      }

      return {
        ...state,
        completed: !state!.completed
      };
    default:
      return state;
  }
};

const todos = (state = [], action: Action) => {
  switch (action.type) {
    case TodoTypes.ADD_TODO:
      return [...state, todo(undefined, action)];
    case TodoTypes.TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const todosReducer = combineReducers({
  todos
});

export default todosReducer;
