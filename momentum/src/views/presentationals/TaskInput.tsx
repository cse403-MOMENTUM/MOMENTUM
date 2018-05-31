import * as React from 'react';
import { Form, Grid } from 'semantic-ui-react';
import { Task } from 'src/models/Task';
import RadioButton from '../../components/RadioButton';
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
    this.state = { selectedValue: [] };
  }

  // tslint:disable-next-line:no-any
  public reactToChange = (event:any) => {
    this.setState({
      selectedValue: event.target.value
    });
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
                  placeholder="Enter your task name here..."
                  id="task-name-input"
                  onChange={ this.props.handleOnChange }/>

                <label id="priority-level-title">Priority level</label>
                <Form.Group inline={true} id="task-priority">
                  <RadioButton
                    name="value"
                    label="1"
                    value="1"
                    checked={false}
                    handleChange={this.reactToChange}
                  />
                  <RadioButton
                    name="value"
                    label="2"
                    value="2"
                    checked={false}
                    handleChange={this.reactToChange}
                  />
                  <RadioButton
                    name="value"
                    label="3"
                    value="3"
                    checked={false}
                    handleChange={this.reactToChange}
                  />
                  <RadioButton
                    name="value"
                    label="4"
                    value="4"
                    checked={false}
                    handleChange={this.reactToChange}
                  />
                  <RadioButton
                    name="value"
                    label="5"
                    value="5"
                    checked={false}
                    handleChange={this.reactToChange}
                  />
                </Form.Group>
                <span id="lowest">lowest</span>
                <span id="highest">highest</span>

                <Form.Group inline={true} id="time-estimate-group">
                  <label>Your task time estimate</label>
                  <Form.Input inline={true}/>
                  <span id="hours">HOURS</span>
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
