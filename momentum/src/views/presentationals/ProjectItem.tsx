import * as React from 'react';
import { Card, Icon } from 'semantic-ui-react';
// import { Project } from 'src/models/Project';

interface Props {
  // project: Project; // TODO
  name: string;
  memberCount: number;
  description: string;
  index: string; // TODO: figure out a way so that we don't have to manually input this
}

class ProjectItem extends React.Component<Props, {}> {
  // private inlineStyle = {
  //   project_item : {
  //     background: '#d4d4d5'
  //   }
  // };

  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <Card
        href={process.env.PUBLIC_URL + '/project'}
        padded={true}
        color="blue">
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta>{this.props.index}</Card.Meta>
          <Card.Meta><Icon name="user" color="grey"/> {this.props.memberCount} members</Card.Meta>
          <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default ProjectItem;
