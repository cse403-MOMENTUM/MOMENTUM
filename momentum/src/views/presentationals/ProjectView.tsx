import * as React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Icon, Modal } from 'semantic-ui-react';
import '../../styles/ProjectView.css';
import TaskInputRedux from '../containers/TaskInputRedux';
// import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';
import ProjectTaskTable from './ProjectTaskTable';
import VisualizationData from './VisualizationData';

// import logo from '../data/logo.svg';

class ProjectView extends React.Component<{}, {}> {

  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        <HeaderBar/>
        <Container className="project-view">
          <Link to="/projectlist">
            <Icon name="arrow left" size="large" color="grey" />
          </Link>
          <Header as="h1" textAlign="center" className="page-header" id="project-title">Momentum</Header>
          <Header.Subheader as="h3" className="project-subheader">Anita Leung - Austin Ha - Haley Ruth - Josh Pollock - Leon Pan</Header.Subheader>
          <Header as="h2" floated="left" id="task-table-title">Tasks</Header>
          <Modal
            trigger={
              <Icon name="plus" inverted={true} circular={true} color="yellow" size="small" id="add-task-button"/>
            }>
            <Modal.Header className="center">Create New Task</Modal.Header>
            <Modal.Content>
              <TaskInputRedux />
            </Modal.Content>
          </Modal>
          <Icon name="close" inverted={true} circular={true} color="yellow" size="small" id="delete-task-button"/>
          <ProjectTaskTable />
          <VisualizationData />
        </Container>
      </div>
    );
  }
}

export default ProjectView;
