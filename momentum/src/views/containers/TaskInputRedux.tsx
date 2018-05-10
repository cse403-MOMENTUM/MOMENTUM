// TODO: give this file a better name
import { connect } from 'react-redux';
import { State } from 'src/models/_Store';
import { taskInputOperations } from '../../state/ducks/task_input';
import TaskInput from '../presentationals/TaskInput';

const mapStateToProps = (state: State) => ({
  currentTask: state.currentTask
});

const mapDispatchToProps = {
  handleOnChange: taskInputOperations.handleOnChange,
  handleSubmit: taskInputOperations.handleSubmit
};

const TaskInputRedux = connect(mapStateToProps, mapDispatchToProps)(TaskInput);

export default TaskInputRedux;
