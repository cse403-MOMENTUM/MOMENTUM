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
              <Table.HeaderCell>Timer</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row >
              <Table.Cell>High</Table.Cell>
              <Table.Cell>Create velocity calculator</Table.Cell>
              <Table.Cell>Austin Ha</Table.Cell>
              <Table.Cell>0 : 0 : 0</Table.Cell>
              <Table.Cell>n/a</Table.Cell>
              <Table.Cell>
                <Modal
                  closeIcon={true}
                  trigger={<Button color="blue">View Task</Button>}
                  style={this.inlineStyle.modal}>
                  <Modal.Content>
                    <TaskPage />
                  </Modal.Content>
                </Modal>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Medium</Table.Cell>
              <Table.Cell>Add routing features</Table.Cell>
              <Table.Cell>Anita Leung</Table.Cell>
              <Table.Cell>0 : 0 : 0</Table.Cell>
              <Table.Cell>n/a</Table.Cell>
              <Table.Cell>
                <Modal
                  closeIcon={true}
                  trigger={<Button color="blue">View Task</Button>}
                  style={this.inlineStyle.modal}>
                  <Modal.Content>
                    <TaskPage />
                  </Modal.Content>
                </Modal>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Low</Table.Cell>
              <Table.Cell>Upgrade dotpot visualization to D3 V5</Table.Cell>
              <Table.Cell>Josh Pollock</Table.Cell>
              <Table.Cell>0 : 0 : 0</Table.Cell>
              <Table.Cell>n/a</Table.Cell>
              <Table.Cell>
                <Modal
                  closeIcon={true}
                  trigger={<Button color="blue">View Task</Button>}
                  style={this.inlineStyle.modal}>
                  <Modal.Content>
                    <TaskPage />
                  </Modal.Content>
                </Modal>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
    );
  }
}

export default ProjectTaskTable;
