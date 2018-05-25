import * as React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import '../../styles/ProjectItem.css';
// import { Project } from 'src/models/Project';

interface Props {
  // project: Project; // TODO
  name: string;
  memberCount: number;
  description: string;
  index: string; // TODO: figure out a way so that we don't have to manually input this
}

class ProjectItem extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <Card
        href={process.env.PUBLIC_URL + '/project'}
        padded={true}
        className="project-card">
        <Card.Content>
          <Card.Meta className="index">{this.props.index}</Card.Meta>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta className="members" textAlign="right">{this.props.memberCount} <Icon name="user" inverted={true} /></Card.Meta>
          {/* <Card.Description>{this.props.description}</Card.Description> */}
        </Card.Content>
      </Card>
    );
  }
}

export default ProjectItem;
