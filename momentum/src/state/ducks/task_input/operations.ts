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
  return ac.addTask(0, values.name, 'assignee_todo', values.estimate, values.description);
};

export default {
  handleOnChange,
  taskInputs
};
