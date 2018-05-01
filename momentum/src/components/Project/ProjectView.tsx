import * as React from 'react';
import { Button, Modal } from 'semantic-ui-react'
import TaskInput from '../Task/TaskInput';

// import logo from '../data/logo.svg';

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
        marginTop: '10% !important' // I think this is being overridden
    }
  };

  constructor(props: IProps) {
    super(props);
    this.state = { 
      taskName: this.props.taskName,
    };
  }
  

  public handleOnChange = (event: React.FormEvent<HTMLInputElement>) : void => {
    // NOTE: We may not need this action handler
    // https://reactjs.org/docs/forms.html#handling-multiple-inputs
    const target = event.target as HTMLInputElement;
    this.setState({ 
      taskName: target.value 
    });
  }

  public handleSubmit = (event: React.FormEvent<HTMLFormElement>) : void => {
    // TODO: handles what happens when the user saves a new task
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    alert('You made a new task ' + this.state.taskName + '!');

    fetch('/api/form-submit-url', {
      body: data,
      method: 'POST',
    });
  }

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