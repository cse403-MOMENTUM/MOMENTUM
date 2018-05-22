import * as fromProject from './Project';
import * as fromTasks from './Task';

export interface State {
  currentTask: fromTasks.Task;
  tasks: fromTasks.State;
  currentProject: fromProject.Project;
  projects: fromProject.State;
}

export const initialState: State = {
  currentTask: {
    id: 0,
    name: ''
  },
  tasks: fromTasks.initialState,
  currentProject: {
    id: 0,
    name: '',
    memberCount: 0,
    description: ''
  },
  projects: fromProject.initialState
};
