// TODO: give this file a better name
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from 'src/models/_Store';
import { taskTableOperations, taskTableSelectors } from '../../state/ducks/task_table';
import TaskTable from '../presentationals/TaskTable';

const mapStateToProps = (state: State) => ({
  taskList: taskTableSelectors.getTaskList(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleOnChange: (event: React.FormEvent<HTMLInputElement>) => dispatch(taskTableOperations.handleOnChange(event)),
});

// tslint:disable-next-line:no-any
const TaskTableRedux = connect<any, any, any>(mapStateToProps, mapDispatchToProps)(TaskTable);

export default TaskTableRedux;
