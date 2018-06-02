// import { List } from 'immutable';

export interface Task {
  priority: number;
  name: string;
  assignee: string;
  description: string;
  seconds_spent: number;
  progress: number; // out of 100
  estimate: number; // in seconds
}

export interface State {
  // tasks: List<Task>;
  tasks: Task[];
}

export const initialState: State = {
  tasks: [
    {
      priority: 4,
      name: 'Create velocity calculator',
      assignee: 'Austin Ha',
      description: 'Creating the velocity calculator for EBS.',
      seconds_spent: 18603,
      progress: 50,
      estimate: 28800
    },
    {
      priority: 5,
      name: 'Add routing features',
      assignee: 'Anita Leung',
      description: 'Allow routing in order to navigate between pages.',
      seconds_spent: 46930,
      progress: 20,
      estimate: 10800
    },
    {
      priority: 2,
      name: 'Upgrade dotpot visualization to D3 V5',
      assignee: 'Josh Pollock',
      description: 'Add visualization graphs representing project time estimations.',
      seconds_spent: 63645,
      progress: 80,
      estimate: 10800
    }
  ]
};
