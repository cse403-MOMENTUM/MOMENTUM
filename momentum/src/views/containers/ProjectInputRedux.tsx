import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { reduxForm } from 'redux-form';
import { State } from 'src/models/_Store';
import { projectOperations, projectSelectors } from '../../state/ducks/project';
import ProjectInput from '../presentationals/ProjectInput';

const mapStateToProps = (state: State) => ({
    currentProject: projectSelectors.getCurrentProject(state),
    projects: projectSelectors.getProjects(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    // tslint:disable-next-line:no-any
    projectInputs: (values: any) => dispatch(projectOperations.projectInputs(values))
});

// tslint:disable-next-line:no-any
const ProjectInputRedux = connect<any, any, any>(mapStateToProps, mapDispatchToProps)(ProjectInput);

export default reduxForm({
  form: 'TaskInputRedux'
})(ProjectInputRedux);
