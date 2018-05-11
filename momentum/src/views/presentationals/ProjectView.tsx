import * as React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import TaskInputRedux from '../containers/TaskInputRedux';
import ProjectTaskTable from './ProjectTaskTable';

// import logo from '../data/logo.svg';

class ProjectView extends React.Component<{}, {}> {
  private inlineStyle = {
    modal : {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10% !important' // I think this is being overridden
    }
  };

  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        <Header as="h1" textAlign="center">Project Name (TODO)</Header>
        <Header as="h3" textAlign="center">John Smith - Jane Doe (TODO)</Header>
        <Header as="h2">Tasks</Header>
        <Modal
            closeIcon={true}
            trigger={<Button color="yellow">New Task</Button>}
            style={this.inlineStyle.modal}>
            <Modal.Header>Create new task</Modal.Header>
            <Modal.Content>
                <TaskInputRedux />
            </Modal.Content>
        </Modal>
        <Icon name="filter" />
        <ProjectTaskTable />
      </div>
    );
  }
}

export default ProjectView;
