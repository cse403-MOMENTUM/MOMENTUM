import * as React from 'react';
import { InputField, TextAreaField } from 'react-semantic-redux-form';
import { Field } from 'redux-form';
import { Button, Form } from 'semantic-ui-react';
import { Task } from 'src/models/Task';
// import '../styles/Task.css';

// import logo from '../data/logo.svg';

interface Props {
  currentTask: Task;
  // handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  // tslint:disable-next-line:no-any
  handleSubmit: (event: any) => any;
  // tslint:disable-next-line:no-any
  taskInputs: (values: any) => void;
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
          {/* <h1 className="task-detail-title">This task name: { this.props.currentTask.name }</h1> */}
          <Form onSubmit={ this.props.handleSubmit(this.props.taskInputs) }>

            <Field name="taskName" component={InputField}
              inline={true}
              fluid={true}
              label="Task Name"
              placeholder="Task name"
              onChange={ this.props.handleOnChange }/>

            {/* <Form.Group inline={true} id="task-priority">
              <label htmlFor="taskImportance">Priority level</label>

              <Form.Radio label="Low" value="l" />
              <Form.Radio label="Medium" value="m" />
              <Form.Radio label="High" value="h" />
            </Form.Group> */}

            <Form.Group inline={true}>
              <Field name="timeEstimate" component={InputField} inline={true} label="Your task time estimate" /> hours
            </Form.Group>

            <Field name="taskDescription"
             component={TextAreaField}
              label="Task description"
              placeholder="Enter your task description" />

            <Form.Field control={Button} color="blue" type="submit">Create this task</Form.Field>
          </Form>
        </header>
      </div>
    );
  }
}

export default TaskInput;
