import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';
import NormalDistribution from './components/DotPlots/NormalDistribution';
import './index.css';
import ProjectView from './views/presentationals/ProjectView';

// TODO: style should be moved to a separate file.
const style = {
  h1: {
    marginTop: '3em',
  }
};

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header
          as="h1"
          content="Project Name" // TODO: dynamically get appropriate title
          style={style.h1}
          textAlign="center"
        />
        <Container>
          <ProjectView />
          <NormalDistribution width={960} height={450}
            z_limit={4}
            margin={{
              bottom: 30,
              left: 50,
              right: 20,
              top: 20
            }} />
        </Container>
      </div>
    );
  }
}

export default App;
