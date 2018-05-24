import * as React from 'react';
import { Table } from 'semantic-ui-react';

// import logo from '../data/logo.svg';

const TASK_TABLE_DATA = [
  {priority: 'High', name: 'Create velocity calculator', assignee: 'Austin Ha', hours_spent: 0, minutes_spent: 0, seconds_spent: 0, progress: 0},
  {priority: 'Medium', name: 'Add routing features', assignee: 'Anita Leung', hours_spent: 0, minutes_spent: 0, seconds_spent: 0, progress: 0},
  {priority: 'Low', name: 'Upgrade dotpot visualization to D3 V5', assignee: 'Josh Ha', hours_spent: 0, minutes_spent: 0, seconds_spent: 0, progress: 0}
];

// tslint:disable-next-line:no-any
const TaskTableRow = ({row}:any) => (
  <Table.Row>
    <Table.Cell>{row.priority}</Table.Cell>
    <Table.Cell>{row.name}</Table.Cell>
    <Table.Cell>{row.assignee}</Table.Cell>
    <Table.Cell>0 : 0 : 0</Table.Cell>
    <Table.Cell>{row.progress}</Table.Cell>
  </Table.Row>
);

// tslint:disable-next-line:no-any
const TaskTable = ({data}:any) => (
  <Table singleLine={true}>
    <Table.Header>
      <Table.Row>
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
        data.map((row: any) => (
          <TaskTableRow row={row} />
        ))
      }
    </Table.Body>
  </Table>
);

class ProjectTaskTable extends React.Component<{}, {}> {

  public render() {
    return (
      <TaskTable data={TASK_TABLE_DATA} />

        // <Table singleLine={true}>
        //   <Table.Header>
        //     <Table.Row>
        //       <Table.HeaderCell>Priority</Table.HeaderCell>
        //       <Table.HeaderCell>Task Name</Table.HeaderCell>
        //       <Table.HeaderCell>Person Assigned</Table.HeaderCell>
        //       <Table.HeaderCell>Time Spent</Table.HeaderCell>
        //       <Table.HeaderCell>Progress Towards Estimated Time</Table.HeaderCell>
        //     </Table.Row>
        //   </Table.Header>

        //   <Table.Body>
        //     <Table.Row>
        //       <Table.Cell>High</Table.Cell>
        //       <Table.Cell>Create velocity calculator</Table.Cell>
        //       <Table.Cell>Austin Ha</Table.Cell>
        //       <Table.Cell>0 : 0 : 0</Table.Cell>
        //       <Table.Cell>n/a</Table.Cell>
        //     </Table.Row>
        //     <Table.Row>
        //       <Table.Cell>Medium</Table.Cell>
        //       <Table.Cell>Add routing features</Table.Cell>
        //       <Table.Cell>Anita Leung</Table.Cell>
        //       <Table.Cell>0 : 0 : 0</Table.Cell>
        //       <Table.Cell>n/a</Table.Cell>
        //     </Table.Row>
        //     <Table.Row>
        //       <Table.Cell>Low</Table.Cell>
        //       <Table.Cell>Upgrade dotpot visualization to D3 V5</Table.Cell>
        //       <Table.Cell>Josh Pollock</Table.Cell>
        //       <Table.Cell>0 : 0 : 0</Table.Cell>
        //       <Table.Cell>n/a</Table.Cell>
        //     </Table.Row>
        //   </Table.Body>
        // </Table>
    );
  }
}

export default ProjectTaskTable;
