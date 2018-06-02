import * as fromProject from './Project';
import * as fromTasks from './Task';

export interface State {
  currentTask: fromTasks.Task;
  tasks: fromTasks.State;
  currentProject: fromProject.Project;
  projects: fromProject.State;
  // TODO: switch to this
  /* tasks: {
    currentTask: fromTasks.Task;
    tasks: fromTasks.Task[];
  };
  projects: {
    currentProject: fromTasks.Task;
    projects: fromTasks.Task[];
  }; */
}

export const initialState: State = {
  currentTask: {
    priority: 0,
    name: '',
    assignee: '',
    description: '',
    seconds_spent: 0,
    progress: 0,
    estimate: 0
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
