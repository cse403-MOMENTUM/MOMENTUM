import * as React from 'react';
import { Progress, Table } from 'semantic-ui-react';
import '../../styles/ProjectTaskTable.css';

// import logo from '../data/logo.svg';

class ProjectTaskTable extends React.Component<{}, {}> {

  public render() {
    return (
        <Table singleLine={true} basic="very" className="task-table">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Priority</Table.HeaderCell>
              <Table.HeaderCell>Task Name</Table.HeaderCell>
              <Table.HeaderCell>Person Assigned</Table.HeaderCell>
              <Table.HeaderCell>Time Spent</Table.HeaderCell>
              <Table.HeaderCell>Time Estimated</Table.HeaderCell>
              <Table.HeaderCell>Progress Towards Estimated Time</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>5</Table.Cell>
              <Table.Cell>Create velocity calculator</Table.Cell>
              <Table.Cell>Austin Ha</Table.Cell>
              <Table.Cell>2 hrs</Table.Cell>
              <Table.Cell>4 hrs</Table.Cell>
              <Table.Cell><Progress percent={50} size="tiny" /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>3</Table.Cell>
              <Table.Cell>Add routing features</Table.Cell>
              <Table.Cell>Anita Leung</Table.Cell>
              <Table.Cell>2 hrs</Table.Cell>
              <Table.Cell>10 hrs</Table.Cell>
              <Table.Cell><Progress percent={20} size="tiny" /></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Upgrade dotpot visualization to D3 V5</Table.Cell>
              <Table.Cell>Josh Pollock</Table.Cell>
              <Table.Cell>8 hrs</Table.Cell>
              <Table.Cell>10 hrs</Table.Cell>
              <Table.Cell><Progress percent={80} size="tiny" /></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
    );
  }
}

export default ProjectTaskTable;
