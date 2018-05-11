import * as fromTasks from './Task';

export interface State {
  currentTask: fromTasks.Task;
  tasks: fromTasks.State;
}

export const initialState: State = {
  currentTask: {
    id: 0,
    name: ''
  },
  tasks: fromTasks.initialState
};
