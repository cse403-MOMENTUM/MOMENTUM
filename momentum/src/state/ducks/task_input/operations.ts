import { SetCurrTaskAction } from '../../action-types';
import actions from './action-creators';

export const handleOnChange = (event: React.FormEvent<HTMLInputElement>) : SetCurrTaskAction => {
  // NOTE: We may not need this action handler
  // https://reactjs.org/docs/forms.html#handling-multiple-inputs
  const target = event.target as HTMLInputElement;
  // TODO: currentTask.name = target.value (via action-creator)
  return actions.setCurrentTask(target.value);
};

// TODO: this is not idiomatic redux. `alert` is a side effect.
// Look into ways of improving this
// export const handleSubmit = (event: React.FormEvent<HTMLFormElement>) : void => {
//   event.preventDefault();
//   // const data = new FormData(event.target as HTMLFormElement);
//   const formData = {};
//   alert('You made a new task ' + /* taskName */ 'FIXME' + '!');
//   // tslint:disable-next-line:forin
//   for (const field in this.refs) {
//     formData[field] = this.refs.[field].value;
//   }
//   console.log('---> ', formData);
//   // fetch('/api/form-submit-url', {
//   //   body: data,
//   //   method: 'POST',
//   // });
// };

// tslint:disable-next-line:no-any
export const handleSubmit = (formValues: any) : void => {
  console.log(formValues.taskname!);
  // alert('You made a new task ' +  formValues + 'FIXME' + '!');
};

export default {
  handleOnChange,
  handleSubmit
};
