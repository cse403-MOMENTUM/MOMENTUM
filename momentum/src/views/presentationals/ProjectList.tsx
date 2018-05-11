import * as React from 'react';
import { Card, Header } from 'semantic-ui-react';
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
        <div style={this.inlineStyle.project_list}>
            <Header as="h1" textAlign="center">
                PROJECTS
            </Header>
            <Card.Group itemsPerRow={3}>
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </Card.Group>
        </div>
    );
  }
}

export default ProjectList;
