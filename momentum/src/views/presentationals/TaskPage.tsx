import * as React from 'react';
import { Container, Form, Header } from 'semantic-ui-react';
// import '../styles/Task.css';

class TaskPage extends React.Component<{}, {}> {
//   constructor(props: IProps) {
//     super(props);
//     this.state = {
//       taskName: this.props.taskName,
//     };
//   }

  public render() {
    return (
      <div className="task-detail">
        <header className="task-detail-header">
          <Container textAlign="center">
            <Header as="h2">Task Name (TODO)</Header>
          </Container>
            <div className="ui two column grid">
                <div className="column">
                    <div className="ui segment">
                        <div className="row">
                            <div className="task-description">Task description (TODO)</div>
                        </div>
                    </div>
                    <div className="ui segment">
                        <div className="row">
                            <div className="estimated-time-label">Estimated Time:</div>
                            <div className="estimated-time">--:-- Hours</div>
                            <div className="current-time-label">Current Time:</div>
                            <div className="current-time">--:-- Hours</div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui segment">
                        <div className="status">You are currently working (TODO) on this task</div>
                        <Form.Button color="blue" type="submit">Stop working on this task (TODO)</Form.Button>
                        <div className="completion-status">This task is not complete</div>
                        <Form.Button color="blue" type="submit">Mark this task as complete (TODO)</Form.Button>
                    </div>
                </div>
            </div>
        </header>
      </div>
    );
  }
}

export default TaskPage;
