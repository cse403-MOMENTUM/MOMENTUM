import * as React from 'react';
// import { BrowserRouter, Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';

// import logo from '../data/logo.svg';

class ProjectItem extends React.Component<{}, {}> {
  // private inlineStyle = {
  //   project_item : {
  //     background: '#d4d4d5'
  //   }
  // };

  public render() {
    return (
      <Card
        href={process.env.PUBLIC_URL + '/project'}
        padded={true}
        color="blue">
        <Card.Content>
          <Card.Header>Project Name</Card.Header>
          <Card.Meta>01</Card.Meta>
          <Card.Meta><Icon name="user" color="grey"/> 10 members</Card.Meta>
          <Card.Description>Possible project description here.</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default ProjectItem;
