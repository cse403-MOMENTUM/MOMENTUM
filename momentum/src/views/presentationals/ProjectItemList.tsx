import * as React from 'react';
import { Card } from 'semantic-ui-react';
import '../../styles/ProjectItem.css';
import ProjectItem from './ProjectItem';

class ProjectItemList extends React.Component<{}, {}> {

  public render() {
    return (
        <Card.Group itemsPerRow={3}>
            <ProjectItem name="Momentum" memberCount={5} index="01" description="A task estimation tool."/>
            <ProjectItem name="Commit Min" memberCount={3} index="02" description="A tool that automatically minimizes bug fix commits."/>
            <ProjectItem name="DeMark" memberCount={5} index="03" description="A plugin for the IntelliJ IDEA that is used to keep track of temporary debug code."/>
            <ProjectItem name="nl2bash" memberCount={4} index="04" description="Utilizing natural language processing to transform english requests to valid Bash commands."/>
            <ProjectItem name="Nullness Lite" memberCount={5} index="05" description="A lite option of the Nullness Checker in the Checker Framework to detect nullness bugs in java source files."/>
            <ProjectItem name="Smerge" memberCount={6} index="06" description="A merge tool that resolves merge conflicts with abstract syntax trees."/>
            <ProjectItem name="Test Bayes" memberCount={5} index="07" description="A tool designed to speed up the testing process of development significantly."/>
            <ProjectItem name="Track Forever" memberCount={4} index="08" description="A tool designed to help developers maintain their issues and bug reports across various popular industry issue trackers."/>
            <ProjectItem name="Verigames" memberCount={6} index="09" description="A tool that verifies programs."/>
          </Card.Group>
    );
  }
}

export default ProjectItemList;
