import { List } from 'immutable';

export interface Project {
  id: number;
  name: string;
  memberCount: number;
  description: string;
}

export interface State {
  projects: List<Project>;
}

export const initialState: State = {
  projects: List()
};
