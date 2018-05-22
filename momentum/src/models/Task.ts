import { List } from 'immutable';

export interface Task {
  id?: number;
  name: string;
  description?: string;
}

export interface State {
  tasks: List<Task>;
}

export const initialState: State = {
  tasks: List()
};
