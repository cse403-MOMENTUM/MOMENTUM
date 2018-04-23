import * as React from 'react';
// import '../styles/Task.css';

// import logo from '../data/logo.svg';

interface IProps {
  defaultName: string
}

interface IState {
  name: string
}

class TaskInput extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { 
      name: this.props.defaultName,
    };
  }

  public handleOnChange = (event: any) : void => {
    // NOTE: We may not need this action handler
    // https://reactjs.org/docs/forms.html#handling-multiple-inputs
    this.setState({ 
      name: event.target.value 
    });
  }

  public handleSubmit = (event: any) : void => {
    // TODO: handles what happens when the user saves a new task
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/api/form-submit-url', {
      body: data,
      method: 'POST',
    });
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">This task name: { this.state.name }</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Task name 
              <input type="text" name="taskName" onChange={ this.handleOnChange } />
            </label>
            <label>
              Priority level
              <input type="radio" name="taskImportance" value="green" /> Green
              <input type="radio" name="taskImportance" value="yellow" /> Yellow
              <input type="radio" name="taskImportance" value="red" /> Red
            </label>
            <label>
              Your task time estimate
              <input type="text" name="taskTimeEstimate" onChange={ this.handleOnChange } />   
              hours         
            </label>
            <label>
              Task description
              <textarea
                placeholder="Enter your task description here..."
                name="taskDescription"
              />
            </label>

            <button>Create this task</button>
          </form>
        </header>
      </div>
    );
  }
}

export default TaskInput; 