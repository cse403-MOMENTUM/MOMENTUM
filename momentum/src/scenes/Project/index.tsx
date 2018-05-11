import * as React from 'react';
import { Button, Header, Icon, Modal, Table } from 'semantic-ui-react';
import TaskInput from './components/TaskInput';
// import TaskView from './components/TaskView';

interface IProps {
  taskName: string;
}

interface IState {
  taskName: string;
}

class ProjectView extends React.Component<IProps, IState> {
  private inlineStyle = {
    modal : {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10% !importagitnt' // I think this is being overridden
    }
  };

  public render() {
    return (
      <div>
        <Header as="h1" textAlign="center">Project Name (TODO)</Header>
        <Header as="h3" textAlign="center">John Smith - Jane Doe (TODO)</Header>
        <Header as="h2">Tasks</Header>
        <Modal
          closeIcon={true}
          trigger={<Button color="yellow">New Task</Button>}
          style={this.inlineStyle.modal}>
          <Modal.Header>Create new task</Modal.Header>
          <Modal.Content>
            <TaskInput taskName="My Task" />
            </Modal.Content>
        </Modal>
        <Icon name="filter" />
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
              <Table.Cell>John Lilki</Table.Cell>
              <Table.Cell>September 14, 2013</Table.Cell>
              <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
              <Table.Cell>No</Table.Cell>
              <Table.Cell>No</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jamie Harington</Table.Cell>
              <Table.Cell>January 11, 2014</Table.Cell>
              <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jill Lewis</Table.Cell>
              <Table.Cell>May 11, 2014</Table.Cell>
              <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

      </div>
    );
  }
}

export default ProjectView;
