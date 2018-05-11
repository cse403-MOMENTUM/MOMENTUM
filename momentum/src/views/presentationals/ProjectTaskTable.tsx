import * as React from 'react';
import { Form, Table } from 'semantic-ui-react';

// import logo from '../data/logo.svg';

class ProjectTaskTable extends React.Component<{}, {}> {

  public render() {
    return (
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
            <Table.Row>
                <Table.Cell>todo</Table.Cell>
                <Form.Button color="yellow">
                  <Table.Cell>Name 1</Table.Cell>
                </Form.Button>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>- : - : -</Table.Cell>
                <Table.Cell>todo</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>todo</Table.Cell>
              <Form.Button color="yellow">
                <Table.Cell>Name 2</Table.Cell>
              </Form.Button>
              <Table.Cell>Jamie Harington</Table.Cell>
              <Table.Cell>- : - : -</Table.Cell>
              <Table.Cell>todo</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>todo</Table.Cell>
              <Form.Button color="yellow">
                <Table.Cell>Name 3</Table.Cell>
              </Form.Button>
              <Table.Cell>Jill Lewis</Table.Cell>
              <Table.Cell>- : - : -</Table.Cell>
              <Table.Cell>todo</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
    );
  }
}

export default ProjectTaskTable;
