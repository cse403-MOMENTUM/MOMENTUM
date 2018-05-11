// TODO: give this file a better name
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from 'src/models/_Store';
import { taskInputOperations, taskInputSelectors } from '../../state/ducks/task_input';
import TaskInput from '../presentationals/TaskInput';

const mapStateToProps = (state: State) => ({
  currentTask: taskInputSelectors.getCurrentTask(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleOnChange: (event: React.FormEvent<HTMLInputElement>) => dispatch(taskInputOperations.handleOnChange(event)),
  handleSubmit: taskInputOperations.handleSubmit
});

// tslint:disable-next-line:no-any
const TaskInputRedux = connect<any, any, any>(mapStateToProps, mapDispatchToProps)(TaskInput);

export default TaskInputRedux;
