import { connect } from 'react-redux';
import { State } from 'src/models/_Store';
import { projectSelectors } from '../../state/ducks/project';
import ProjectItemList from '../presentationals/ProjectItemList';

const mapStateToProps = (state: State) => ({
  projects: projectSelectors.getProjects(state)
});

// tslint:disable-next-line:no-any
const ProjectItemListRedux = connect<any, any, any>(mapStateToProps, {})(ProjectItemList);

export default ProjectItemListRedux;
