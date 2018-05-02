import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react'
import NormalDistribution from './components/DotPlots/NormalDistribution';
import ProjectView from './components/Project/ProjectView';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// TODO: style should be moved to a separate file.
const style = {
  h1: {
    marginTop: '3em',
  }
}

ReactDOM.render(
  <div>
    <Header
      as="h1"
      content="Project Name" // TODO: dynamically get appropriate title
      style={style.h1}
      textAlign="center"
      />
    <Container>
      <ProjectView taskName="smthing" />
      <NormalDistribution width={960} height={450}
        z_limit={4}
        margin={{
          bottom: 30,
          left: 50,
          right: 20,
          top: 20
        }} />
      </Container>
  </div>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
