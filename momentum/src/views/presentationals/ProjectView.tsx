import * as React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import TaskInputRedux from '../containers/TaskInputRedux';

// import logo from '../data/logo.svg';

class ProjectView extends React.Component<{}, {}> {
  private inlineStyle = {
    modal : {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10% !important' // I think this is being overridden
    }
  };

  public render() {
    return (
        <Modal
            closeIcon={true}
            trigger={<Button color="yellow">New Task</Button>}
            style={this.inlineStyle.modal}>
            <Modal.Header>Create new task</Modal.Header>
            <Modal.Content>
                <TaskInputRedux />
            </Modal.Content>
        </Modal>
    );
  }
}

export default ProjectView;
