export interface Task {
  id: number;
  name: string;
}

export interface State {
  tasks: Task[];
}

export const initialState: State = {
  tasks: []
};
