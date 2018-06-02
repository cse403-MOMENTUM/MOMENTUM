// import { List } from 'immutable';

export interface Project {
  id: number;
  name: string;
  memberCount: number;
  description: string;
}

export interface State {
  // projects: List<Project>;
  projects: Project[];
}

export const initialState: State = {
  projects: [
    {
      id: 1,
      name:'Momentum',
      memberCount: 5,
      description: 'A task estimation tool.'
    },
    {
      id: 2,
      name:'Commit Min',
      memberCount: 3,
      description: 'A tool that automatically minimizes bug fix commits.'
    },
    {
      id: 3,
      name:'DeMark',
      memberCount: 5,
      description: 'A plugin for the IntelliJ IDEA that is used to keep track of temporary debug code.'
    },
    {
      id: 4,
      name:'nl2bash',
      memberCount: 4,
      description: 'Utilizing natural language processing to transform english requests to valid Bash commands.'
    },
    {
      id: 5,
      name:'Nullness Lite',
      memberCount: 5,
      description: 'A lite option of the Nullness Checker in the Checker Framework to detect nullness bugs in java source files.'
    },
    {
      id: 6,
      name:'Smerge',
      memberCount: 6,
      description: 'A merge tool that resolves merge conflicts with abstract syntax trees.'
    },
    {
      id: 7,
      name:'Test Bayes',
      memberCount: 5,
      description: 'A tool designed to speed up the testing process of development significantly.'
    },
    {
      id: 8,
      name:'Track Forever',
      memberCount: 4,
      description: 'A tool designed to help developers maintain their issues and bug reports across various popular industry issue trackers.'
    },
    {
      id: 9,
      name:'Verigames',
      memberCount: 6,
      description: 'A tool that verifies programs.'

    }
  ]
};
