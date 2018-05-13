import * as React from 'react';
import { Button, Modal, Table } from 'semantic-ui-react';
import TaskPage from './TaskPage';

// import logo from '../data/logo.svg';

class ProjectTaskTable extends React.Component<{}, {}> {

  private inlineStyle = {
    modal : {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto'
    }
  };

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
                <Modal
                  closeIcon={true}
                  trigger={<Button color="yellow"> <Table.Cell>Name 1</Table.Cell> </Button>}
                  style={this.inlineStyle.modal}>
                  <Modal.Content>
                    <TaskPage />
                  </Modal.Content>
                </Modal>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>- : - : -</Table.Cell>
                <Table.Cell>todo</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>todo</Table.Cell>
              <Modal
                closeIcon={true}
                trigger={<Button color="yellow"> <Table.Cell>Name 2</Table.Cell> </Button>}
                style={this.inlineStyle.modal}>
                <Modal.Content>
                  <TaskPage />
                </Modal.Content>
              </Modal>
              <Table.Cell>Jamie Harington</Table.Cell>
              <Table.Cell>- : - : -</Table.Cell>
              <Table.Cell>todo</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>todo</Table.Cell>
              <Modal
                closeIcon={true}
                trigger={<Button color="yellow"> <Table.Cell>Name 3</Table.Cell> </Button>}
                style={this.inlineStyle.modal}>
                <Modal.Content>
                  <TaskPage />
                </Modal.Content>
              </Modal>
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
