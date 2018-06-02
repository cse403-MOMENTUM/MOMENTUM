import * as React from 'react';
import { Container, Header, Icon, Modal} from 'semantic-ui-react';
import '../../styles/ProjectList.css';
import ProjectInputRedux from '../containers/ProjectInputRedux';
// import ProjectItem from './ProjectItem';
import HeaderBar from './HeaderBar';
// import ProjectInput from './ProjectInput';
// import ProjectItemList from './ProjectItemList';

// import logo from '../data/logo.svg';
import ProjectItemListRedux from '../containers/ProjectItemListRedux';

class ProjectList extends React.Component<{}, {}> {
  public inlineStyle = {
    modal : {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '0px !important'
    }
  };

  public render() {
    return (
      <div>
        <HeaderBar/>
        <Container id="project-list-container">
          <Header textAlign="center" id="project-list-title">
            <Header.Content as="h1" className="page-header">PROJECTS</Header.Content>
            <Header.Content className="right">
              <Modal
                trigger={
                  <Icon name="plus" inverted={true} circular={true} color="yellow" size="small" id="add-project-button"/>
                }
                style={this.inlineStyle.modal}>
                <Modal.Header className="center">New Project</Modal.Header>
                <Modal.Content>
                  <ProjectInputRedux />
                </Modal.Content>
              </Modal>
              <Icon name="close" inverted={true} circular={true} color="yellow" size="small" id="delete-project-button"/>
            </Header.Content>
          </Header>
          <ProjectItemListRedux />
        </Container>
      </div>
    );
  }
}

export default ProjectList;
