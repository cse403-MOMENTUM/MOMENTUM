import * as React from 'react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';
import logo from '../../data/momentum-logo.png';
import '../../index.css';

import '../../styles/App.css';


class App extends React.Component {
  public state = {};

  public handleItemClick = (event: React.MouseEvent<HTMLElement>, {name } : { name : string }) => this.setState({ activeItem: name });

  public render() {
    return (
      <Menu secondary={true} id="menu-bar">
        <Link to="/">
          <Menu.Item name="home" className="logo" onClick={this.handleItemClick}>
            <img src={logo} className="App-logo" alt="logo" />
          </Menu.Item>
        </Link>
      </Menu>
    );
  }
}

export default App;
