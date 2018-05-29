import * as React from 'react';
import { Form, Grid } from 'semantic-ui-react';
import { Task } from 'src/models/Task';
import '../../styles/TaskInput.css';
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
      <div className="task-input">
        <header className="task-input-header">
          <Form onSubmit={ this.props.handleSubmit }>

          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Form.Input
                  inline={true}
                  fluid={true}
                  label="Task Name"
                  placeholder="Task name"
                  onChange={ this.props.handleOnChange }/>

                <label>Priority level</label>
                <Form.Group inline={true} id="task-priority">

                  <Form.Radio value="1" /><span className="priority-label">1</span>
                  <Form.Radio value="2" /><span className="priority-label">2</span>
                  <Form.Radio value="3" /><span className="priority-label">3</span>
                  <Form.Radio value="4" /><span className="priority-label">4</span>
                  <Form.Radio value="5" /><span className="priority-label">5</span>
                </Form.Group>

                <Form.Group inline={true} id="time-estimate-group">
                  <label>Your task time estimate</label>
                  <Form.Input inline={true}/>
                  HOURS
                </Form.Group>
              </Grid.Column>
              <Grid.Column>
                <Form.TextArea
                  label="Task description"
                  placeholder="Enter your task description here..."
                  id="task-description"/>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <div className="center">
            <Form.Button color="blue" type="submit">Create this task</Form.Button>
          </div>
          </Form>
        </header>
      </div>
    );
  }
}

export default TaskInput;
