import * as React from 'react';
import { Button, Grid} from 'semantic-ui-react';
import Stopwatch from '../../components/Stopwatch';
import '../../styles/TaskView.css';

interface Props {
    // tslint:disable-next-line:no-any
    row: any;
}

class TaskView extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    // this.state = {
    //   taskName: this.props.taskName,
    // };
  }

  public render() {
    const row = this.props.row;

    return (
      <div className="task-detail">
        <Grid divided={true}>
            <Grid.Row columns={2} className="aligned center">
                <Grid.Column className="aligned">
                    <h3 className="estimated-time-label">ESTIMATED TIME</h3>
                    <span className="estimated-time">{row.estimate} HOURS</span>
                    <h3 className="current-time-label">CURRENT TIME</h3>
                    <span className="current-time">{row.hours_spent}.{Math.ceil(row.minutes_spent / 60.0 * 10)} HOURS</span>
                </Grid.Column>
                <Grid.Column>
                    <Stopwatch status={false} runningTime={0} />
                    <div className="completion">
                        <p>This task is not complete</p>
                        <Button color="blue">Mark this task as complete</Button>
                    </div>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <div className="task-description">
                        <h4>TASK DESCRIPTION</h4>
                        <p>{row.description}</p>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default TaskView;
