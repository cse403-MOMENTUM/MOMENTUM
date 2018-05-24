import * as React from 'react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';
import logo from '../../data/momentum-logo.png';
import '../../index.css';

import '../../styles/App.css';


class App extends React.Component {

  public render() {
    return (
      <Menu secondary={true} id="menu-bar">
        <Menu.Item name="home" className="logo">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default App;
