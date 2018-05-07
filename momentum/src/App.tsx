import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu } from 'semantic-ui-react';
import NormalDistribution from './scenes/DotPlots/NormalDistribution';
import Project from './scenes/Project';

// import '../styles/App.css';

const style = {
  h1: {
    marginTop: '3em',
  }
}

class App extends React.Component {
  public render() {
    return (
      <div
      style={{
        // see some additional required styles in index.css
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
      { /* the following section is fixed to the top */ }
      <Menu
        inverted={true}
        color="green"
        borderless={true}
        style={{
          borderRadius: 0, // clear semantic-ui style
          flexShrink: 0, // don't allow flexbox to shrink it
          margin: 0 // clear semantic-ui style
        }}>
        <Menu.Item as="h1"
          header={true}>
          Fixed Header
        </Menu.Item>
      </Menu>
      { /* the following section is in the middle, and it can scroll */ }
      <div
        style={{
          flexGrow: 1,
          overflowX: 'hidden',
          overflowY: 'auto',
        }}>
          <p style={{paddingBottom: '200%'}}>This container can scroll vertically. Give it a try!</p>
          <p>You made it to the bottom!</p>
      </div>
      { /* the following section is fixed to the bottom */ }
      <Menu
        inverted={true}
        color="green"
        borderless={true}
        style={{
          borderRadius: 0, // clear semantic-ui style
          flexShrink: 0, // don't allow flexbox to shrink it
          margin: 0 // clear semantic-ui style
        }}>
        <Menu.Item
          header={true}>
          Fixed Footer
        </Menu.Item>
      </Menu>
      <Header
        as="h1"
        content="Project Name" // TODO: dynamically get appropriate title
        style={style.h1}
        textAlign="center"
        />
      <Container>
        <Project taskName="smthing" />
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
