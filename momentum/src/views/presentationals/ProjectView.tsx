import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Icon, Modal } from 'semantic-ui-react';
import NormalDistribution from '../../components/DotPlots/NormalDistribution';
import TaskInputRedux from '../containers/TaskInputRedux';
import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';
import ProjectTaskTable from './ProjectTaskTable';

// import logo from '../data/logo.svg';

class ProjectView extends React.Component<{}, {}> {
  private inlineStyle = {
    modal : {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '10% !important' // I think this is being overridden
    }
  };

  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        <HeaderBar/>
          <Container>
            <Link to="/projectlist">
              <Icon name="arrow left" size="large" color="grey" />
            </Link>
            <Header as="h1" textAlign="center">Project Name (TODO)</Header>
            <Header as="h3" textAlign="center">John Smith - Jane Doe (TODO)</Header>
            <Header as="h2">Tasks</Header>
            <Modal
                closeIcon={true}
                trigger={<Button color="yellow">New Task</Button>}
                style={this.inlineStyle.modal}>
                <Modal.Header>Create new task</Modal.Header>
                <Modal.Content>
                    <TaskInputRedux />
                </Modal.Content>
            </Modal>
            <Icon name="filter" />
            <ProjectTaskTable />
            <NormalDistribution width={960} height={450}
                z_limit={4}
                margin={{
                  bottom: 30,
                  left: 50,
                  right: 20,
                  top: 20
                }} />
          </Container>
        <FooterBar />
      </div>
    );
  }
}

export default ProjectView;
