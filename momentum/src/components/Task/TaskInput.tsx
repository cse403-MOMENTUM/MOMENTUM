import * as React from 'react';
// import '../styles/Task.css';

// import logo from '../data/logo.svg';

interface IProps {
  taskName: string
}

interface IState {
  taskName: string
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
          <form onSubmit={this.handleSubmit}>

            <div id="task-name">
              <label htmlFor="taskName">Task name</label>
              <input type="text" name="taskName" onChange={ this.handleOnChange } />
            </div>

            <div id="task-priority">
              <label htmlFor="taskImportance">Priority level</label>
              <input type="radio" name="taskImportance" value="green" /> Green
              <input type="radio" name="taskImportance" value="yellow" /> Yellow
              <input type="radio" name="taskImportance" value="red" /> Red
            </div>
            
            <div id="task-estimate">
              <label htmlFor="taskTimeEstimate">Your task time estimate</label>
              <input type="text" name="taskTimeEstimate" onChange={ this.handleOnChange } />   
              hours         
            </div>

            <div id="task-description">
              <label htmlFor="taskDescription">Task description</label>
              <textarea
                placeholder="Enter your task description here..."
                name="taskDescription"
              />
            </div>

            <div className="button">
              <button type="submit">Create this task</button>
            </div>
          </form>
        </header>
      </div>
    );
  }
}

export default TaskInput; 