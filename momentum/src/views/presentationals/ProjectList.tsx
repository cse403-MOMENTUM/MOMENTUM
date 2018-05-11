import * as React from 'react';
import { Card, Container, Header } from 'semantic-ui-react';
import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';
import ProjectItem from './ProjectItem';

// import logo from '../data/logo.svg';

class ProjectList extends React.Component<{}, {}> {
  private inlineStyle = {
    project_list : {
      margin: '200px auto'
    }
  };

  public render() {
    return (
      <div>
        <HeaderBar />
          <div style={this.inlineStyle.project_list}>
            <Container>
              <Header as="h1" textAlign="center">PROJECTS</Header>
              <Card.Group itemsPerRow={3}>
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
              </Card.Group>
            </Container>
          </div>
        <FooterBar />
      </div>
    );
  }
}

export default ProjectList;
