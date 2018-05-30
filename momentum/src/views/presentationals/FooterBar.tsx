import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Menu } from 'semantic-ui-react';
import '../../index.css';

import '../../styles/App.css';


class FooterBar extends React.Component {
  public state = {};

  public handleItemClick = (event: React.MouseEvent<HTMLElement>, {name } : { name : string }) => this.setState({ activeItem: name });

  public render() {
    return (
      <Menu secondary={true} id="footer">
        <Menu.Item name="about" onClick={this.handleItemClick}> About </Menu.Item>
        <Menu.Item name="developers" onClick={this.handleItemClick}> Developers </Menu.Item>
        <Menu.Item name="privacy" onClick={this.handleItemClick}> Privacy </Menu.Item>
      </Menu>
    );
  }
}

export default FooterBar;
