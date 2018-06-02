import * as React from 'react';
import { InputField, TextAreaField } from 'react-semantic-redux-form';
import { Field, InjectedFormProps } from 'redux-form';
import { Button, Form, Grid } from 'semantic-ui-react';
import { Task } from 'src/models/Task';
import RadioButton from '../../components/RadioButton';
import '../../styles/TaskInput.css';
// import '../styles/Task.css';

// import logo from '../data/logo.svg';

interface Props {
  currentTask: Task;
  // tslint:disable-next-line:no-any
  taskInputs: (values: any) => void;
  handleOnChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

interface TaskInputs {
  name: string;
}

class TaskInput extends React.Component<InjectedFormProps<TaskInputs> & Props, {}> {
  // tslint:disable-next-line:no-any
  public handleSubmit : any;

  // constructor(props: Props) {
  //   super(props);
  //   this.state = { selectedValue: [] };
  // }

  // tslint:disable-next-line:no-any
  public reactToChange = (event:any) => {
    this.setState({
      selectedValue: event.target.value
    });
  }

  public render() {
    const { handleSubmit, handleOnChange } = this.props;

    return (
      <div className="task-input">
        <header className="task-input-header">
        <Form onSubmit={ handleSubmit(this.props.taskInputs) }>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Field name="name" component={InputField}
                  id="name"
                  inline={true}
                  fluid={true}
                  label="Task Name"
                  placeholder="Enter your task name here..."
                  onChange={ handleOnChange }
                />

                <label id="priority-level-title">Priority level</label>
                <Form.Group inline={true} id="task-priority">
                  <RadioButton
                    name="priority"
                    label="1"
                    value="1"
                    checked={false}
                    handleChange={this.reactToChange}
                  />
                  <RadioButton
                    name="priority"
                    label="2"
                    value="2"
                    checked={false}
                    handleChange={this.reactToChange}
                  />
                  <RadioButton
                    name="priority"
                    label="3"
                    value="3"
                    checked={false}
                    handleChange={this.reactToChange}
                  />
                  <RadioButton
                    name="priority"
                    label="4"
                    value="4"
                    checked={false}
                    handleChange={this.reactToChange}
                  />
                  <RadioButton
                    name="priority"
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
                  <Field name="estimate" component={InputField} inline={true}/>
                  <span id="hours">HOURS</span>
                </Form.Group>
              </Grid.Column>
              <Grid.Column>
              <Field name="description" component={TextAreaField}
                  label="Task description"
                  placeholder="Enter your task description here..."
                  id="task-description"
              />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <div className="center">
            <Form.Field control={Button} color="blue" type="submit">Create this task</Form.Field>
          </div>
        </Form>
        </header>
      </div>
    );
  }
}

export default TaskInput;
