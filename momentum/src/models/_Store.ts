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
