import * as React from 'react';
import { Form } from 'semantic-ui-react';
import { Task } from 'src/models/Task';
// import '../styles/Task.css';

// import logo from '../data/logo.svg';

interface Props {
  currentTask: Task;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleOnChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

class TaskInput extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <div className="task-detail">
        <header className="task-detail-header">
          <h1 className="task-detail-title">This task name: { this.props.currentTask.name } + {this.props.currentTask.id}</h1>
          <Form onSubmit={ this.props.handleSubmit }>

            <Form.Input
              inline={true}
              fluid={true}
              label="Task Name"
              placeholder="Task name"
              onChange={ this.props.handleOnChange }/>

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
