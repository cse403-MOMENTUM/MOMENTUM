import * as React from 'react';
import { Container, Form, Header } from 'semantic-ui-react';
// import '../styles/Task.css';

// interface Props {
//     isOn: false;
//     time: 0;
// }

class TaskPage extends React.Component<{}, {}> {
    // constructor(props: Props) {
    //   super(props);
    // }

    public start() {
        // TODO
    }

    public stop() {
        // TODO
    }

    public render() {
        return (
        <div className="task-detail">
            <header className="task-detail-header">
            <Container textAlign="center">
                <Header as="h2">Create velocity calculator</Header>
            </Container>
                <div className="ui two column grid">
                    <div className="column">
                        <div className="ui segment">
                            <div className="row">
                                <div className="task-description">Create velocity calculator for our project</div>
                            </div>
                        </div>
                        <div className="ui segment">
                            <div className="row">
                                <div className="estimated-time-label">Estimated Time:</div>
                                <div className="estimated-time">--:--</div>
                                <div className="current-time-label">Current Time:</div>
                                <div className="current-time">--:--</div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui segment">
                            <div className="status">You are currently working (TODO) on this task</div>
                            <Form.Button color="blue">Start/Stop (TODO)</Form.Button>
                            {/* <Form.Button color="blue" onClick={this.props.isOn ? this.stop : this.start}>Start/Stop (TODO)</Form.Button> */}
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
