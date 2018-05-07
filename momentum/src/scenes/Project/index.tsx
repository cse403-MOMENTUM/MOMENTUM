import * as React from 'react';
import { Button, Modal } from 'semantic-ui-react'
import TaskInput from './components/TaskInput';
// import TaskView from './components/TaskView';

interface IProps {
  taskName: string
}

interface IState {
  taskName: string
}

class ProjectView extends React.Component<IProps, IState> {
  private inlineStyle = {
    modal : {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10% !importagitnt' // I think this is being overridden
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
          <TaskInput taskName="My Task" />
          </Modal.Content>
      </Modal>
    );
  }
}

export default ProjectView; 