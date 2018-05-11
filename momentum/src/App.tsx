import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu } from 'semantic-ui-react';
import logo from './data/momentum-logo.png';
import NormalDistribution from './scenes/DotPlots/NormalDistribution';
import Project from './scenes/Project';
import Login from './scenes/Project/components/Login';
import ProjectList from './scenes/Project/components/ProjectList';

import './styles/App.css';

class App extends React.Component {
  public state = {};

  public handleItemClick = (event: React.MouseEvent<HTMLElement>, {name } : { name : string }) => this.setState({ activeItem: name });

  public render() {
    return (
      <div>
        <Login />
        <Menu
          secondary={true}
          id="menu-bar">
          <Menu.Item
            name="home"
            className="logo"
            onClick={this.handleItemClick}
          > <img src={logo} className="App-logo" alt="logo" /> </Menu.Item>
        </Menu>
        <Container>
          <ProjectList />
        </Container>
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
        <Menu
          secondary={true}
          id="footer">
          <Menu.Item
            name="about"
            onClick={this.handleItemClick}
          > About </Menu.Item>
          <Menu.Item
            name="developers"
            onClick={this.handleItemClick}
          > Developers </Menu.Item>
          <Menu.Item
            name="privacy"
            onClick={this.handleItemClick}
          > Privacy </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default App;
