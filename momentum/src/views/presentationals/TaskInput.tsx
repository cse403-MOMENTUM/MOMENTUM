import * as React from 'react';
import { Control, Form } from 'react-redux-form';
import { Field } from 'redux-form';
import { Form as SemForm } from 'semantic-ui-react';
import { Task } from 'src/models/Task';

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
          <h1 className="task-detail-title">This task name: { this.props.currentTask.name }</h1>
          <Form onSubmit={this.props.handleSubmit} model="task">

            <Control.text model=".name" />

            <Field
              name="task-name"
              inline={true}
              fluid={true}
              label="Task Name"
              placeholder="Task name"
              onChange={ this.props.handleOnChange }/>

            <SemForm.Group inline={true} id="task-priority">
              <label htmlFor="taskImportance">Priority level</label>

              <SemForm.Radio label="Low" value="l" />
              <SemForm.Radio label="Medium" value="m" />
              <SemForm.Radio label="High" value="h" />
            </SemForm.Group>

            <SemForm.Group inline={true}>
              <SemForm.Input inline={true} label="Your task time estimate" /> hours
            </SemForm.Group>

            <SemForm.TextArea
              label="Task description"
              placeholder="Enter your task description" />

            <SemForm.Button color="blue" type="submit">Create this task</SemForm.Button>
          </Form>
        </header>
      </div>
    );
  }
}

export default TaskInput;
