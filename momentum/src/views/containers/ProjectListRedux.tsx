import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { reduxForm } from 'redux-form';
import { State } from 'src/models/_Store';
import { projectOperations, projectSelectors } from '../../state/ducks/project';
import ProjectItemList from '../presentationals/ProjectItemList';

const mapStateToProps = (state: State) => ({
    currentProject: projectSelectors.getCurrentProject(state),
    projects: projectSelectors.getProjects(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    projectInputs: projectOperations.projectInputs
});

// tslint:disable-next-line:no-any
const ProjectListRedux = connect<any, any, any>(mapStateToProps, mapDispatchToProps)(ProjectItemList);

export default reduxForm({
  form: 'TaskInputRedux'
})(ProjectListRedux);
