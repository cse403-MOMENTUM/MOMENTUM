import { SetCurrTaskAction } from '../../action-types';
import ac from './action-creators';
// import sl from './selectors';

export const handleOnChange = (event: React.FormEvent<HTMLInputElement>) : SetCurrTaskAction => {
  // NOTE: We may not need this action handler
  // https://reactjs.org/docs/forms.html#handling-multiple-inputs
  // TODO: currentTask.name = target.value (via action-creator)
  const target = event.target as HTMLInputElement;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  console.log('target ' + target + 'value ' + value + ' name ' + name);

  // if (name === 'taskName') {
  //   task = ac.setCurrentTask['taskName']
  // }
  return ac.setCurrentTask(target.value);
};

// TODO: this is not idiomatic redux. `alert` is a side effect.
// Look into ways of improving this
export const handleSubmit = (event: React.FormEvent<HTMLFormElement>) : void => {
  // TODO: handles what happens when the user saves a new task
  event.preventDefault();
  // const data = new FormData(event.target as HTMLFormElement);
  alert('You made a new task ' + /* taskName */ + 'FIXME' + '!');

  ac.addTask('some task name', 'some task description');
};

export default {
  handleOnChange,
  handleSubmit
};
