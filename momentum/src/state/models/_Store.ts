import * as fromTasks from './Task';

export interface State {
  tasks: fromTasks.State;
}

export const initialState: State = {
  tasks: fromTasks.initialState
};
