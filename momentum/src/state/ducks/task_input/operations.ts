import { Task } from '../../../models/Task';
import { AddTaskAction, SetCurrTaskAction } from '../../action-types';
import ac from './action-creators';

export const handleOnChange = (event: React.FormEvent<HTMLInputElement>) : SetCurrTaskAction => {
  // NOTE: We may not need this action handler
  // https://reactjs.org/docs/forms.html#handling-multiple-inputs
  const target = event.target as HTMLInputElement;
  // TODO: currentTask.name = target.value (via action-creator)
  return ac.setCurrentTask(target.value);
};

// TODO: this is not idiomatic redux. `alert` is a side effect.
// Look into ways of improving this
// export const handleSubmit = (event: React.FormEvent<HTMLFormElement>) : void => {
// tslint:disable-next-line:no-any
export const taskInputs = (values: any) : AddTaskAction => {
  // TODO: handles what happens when the user saves a new task
  // event.preventDefault();
  // const data = new FormData(event.target as HTMLFormElement);
  // alert('You made a new task ' + /* taskName */ 'FIXME' + '!');

  // fetch('/api/form-submit-url', {
  //   body: data,
  //   method: 'POST',
  // });
  console.log(values);
  return ac.addTask(0, values.name, 'Mike Ernst', values.estimate, values.description);
};

const secondsToHMS = (numSeconds : number) : { hours: number, minutes: number, seconds: number } => {
  const seconds = numSeconds % 60;
  numSeconds = Math.floor(numSeconds / 60);
  const minutes = numSeconds % 60;
  numSeconds = Math.floor(numSeconds / 60);
  const hours = numSeconds % 60;

  return { hours, minutes, seconds };
};

interface ReactTask {
  priority: number;
  name: string;
  assignee: string;
  description: string;
  hours_spent: number;
  minutes_spent: number;
  seconds_spent: number;
  progress: number;
  estimate: number;
}

const taskToReactTask = (task: Task) : ReactTask => {
  const hmsTime = secondsToHMS(task.seconds_spent);
  const hoursSpent = hmsTime.hours;
  const minutesSpent = hmsTime.minutes;
  const secondsSpent = hmsTime.seconds;

  return {
    priority: task.priority,
    name: task.name,
    assignee: task.assignee,
    description: task.description,
    hours_spent: hoursSpent,
    minutes_spent: minutesSpent,
    seconds_spent: secondsSpent,
    progress: task.progress,
    estimate: task.estimate
  };
};

export const tasksToReactTasks = (tasks : Task[]) : ReactTask[] => {
  return tasks.map(taskToReactTask);
};

export default {
  handleOnChange,
  taskInputs,
  tasksToReactTasks
};
