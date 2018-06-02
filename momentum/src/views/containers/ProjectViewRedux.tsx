import { connect } from 'react-redux';
import { State } from 'src/models/_Store';
import { taskInputSelectors } from '../../state/ducks/task_input';
import ProjectView from '../presentationals/ProjectView';

const mapStateToProps = (state: State) => ({
  tasks: taskInputSelectors.getTasks(state)
});

// tslint:disable-next-line:no-any
const ProjectViewRedux = connect<any, any, any>(mapStateToProps, {})(ProjectView);

export default ProjectViewRedux;
