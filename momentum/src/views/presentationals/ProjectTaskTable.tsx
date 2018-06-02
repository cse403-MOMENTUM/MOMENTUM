import * as React from 'react';
import { Icon, Modal, Progress, Table } from 'semantic-ui-react';
import { Task } from '../../models/Task';
import '../../styles/ProjectTaskTable.css';
import TaskView from './TaskView';

// import logo from '../data/logo.svg';

interface Props {
  tasks: Task[];
}

/* const TASK_TABLE_DATA = [
  {priority: 4, name: 'Create velocity calculator', assignee: 'Austin Ha', description: 'Creating the velocity calculator for EBS.', hours_spent: 5, minutes_spent: 10, seconds_spent: 3, progress: 50, estimate: 8},
  {priority: 5, name: 'Add routing features', assignee: 'Anita Leung', description: 'Allow routing in order to navigate between pages.', hours_spent: 13, minutes_spent: 2, seconds_spent: 10, progress: 20, estimate: 3},
  {priority: 2, name: 'Upgrade dotpot visualization to D3 V5', assignee: 'Josh Pollock', description: 'Add visualization graphs representing project time estimations.', hours_spent: 17, minutes_spent: 40, seconds_spent: 45, progress: 80, estimate: 3}
]; */

// tslint:disable-next-line:no-any
const TaskViewModal = ({row}:any) => (
  <Modal trigger={
    <Icon name="unhide" inverted={true} circular={true} color="yellow" size="small" id="add-task-button"/>
  }>
    <Modal.Header className="center">
      <h3 id="task-detail-priority">PRIORITY {row.priority}</h3>
      <h2 id="task-detail-name">{row.name}</h2>
      <h3 id="task-detail-assignee">{row.assignee}</h3>
    </Modal.Header>
    <Modal.Content>
      <TaskView row={row} />
    </Modal.Content>
  </Modal>
);

// tslint:disable-next-line:no-any
const TaskTableRow = ({row}:any) => (
  <Table.Row className="row" onClick={console.log('hi')}>
    <Table.Cell><TaskViewModal row={row} /></Table.Cell>
    <Table.Cell>{row.priority}</Table.Cell>
    <Table.Cell>{row.name}</Table.Cell>
    <Table.Cell>{row.assignee}</Table.Cell>
    <Table.Cell>{row.hours_spent}.{Math.ceil(row.minutes_spent / 60.0 * 10)} hrs</Table.Cell>
    <Table.Cell><Progress percent={row.progress} size="tiny" /></Table.Cell>
  </Table.Row>
);

// tslint:disable-next-line:no-any
const TaskTable = ({data}:any) => {
  console.log(data);
  return (
  <Table singleLine={true} basic="very" className="task-table">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Info</Table.HeaderCell>
        <Table.HeaderCell>Priority</Table.HeaderCell>
        <Table.HeaderCell>Task Name</Table.HeaderCell>
        <Table.HeaderCell>Person Assigned</Table.HeaderCell>
        <Table.HeaderCell>Time Spent</Table.HeaderCell>
        <Table.HeaderCell>Progress Towards Estimated Time</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {
        // tslint:disable-next-line:no-any
        data.map((row: any, i: number) => (
          <TaskTableRow row={row} key={i}/>
        ))
      }
    </Table.Body>
  </Table>
);
};

class ProjectTaskTable extends React.Component<Props, {}> {
  public state = { open: false };
  public show = () => this.setState({open: true });
  public close = () => this.setState({ open: false });

  public render() {
    return (
      <div>
        <TaskTable data={this.props.tasks} />
      </div>
    );
  }
}

export default ProjectTaskTable;
