import * as React from 'react';
import { Form } from 'semantic-ui-react';
// import '../styles/Task.css';

// import logo from '../data/logo.svg';

interface IProps {
  taskName: string;
}

interface IState {
  taskName: string;
}

class TaskInput extends React.Component<IProps, IState> {
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
      <div className="task-detail">
        <header className="task-detail-header">
          <h1 className="task-detail-title">This task name: { this.state.taskName }</h1>
          <Form onSubmit={this.handleSubmit}>

            <Form.Input
              inline={true}
              fluid={true}
              label="Task Name"
              placeholder="Task name"
              onChange={ this.handleOnChange }/>

            <Form.Group inline={true} id="task-priority">
              <label htmlFor="taskImportance">Priority level</label>

              <Form.Radio label="Low" value="l" />
              <Form.Radio label="Medium" value="m" />
              <Form.Radio label="High" value="h" />
            </Form.Group>

            <Form.Group inline={true}>
              <Form.Input inline={true} label="Your task time estimate" /> hours
            </Form.Group>

            <Form.TextArea
              label="Task description"
              placeholder="Enter your task description" />

            <Form.Button color="blue" type="submit">Create this task</Form.Button>
          </Form>
        </header>
      </div>
    );
  }
}

export default TaskInput;
