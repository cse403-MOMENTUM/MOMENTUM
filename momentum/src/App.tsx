import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import ProjectViewRedux from './views/containers/ProjectViewRedux';
import Login from './views/presentationals/Login';
import ProjectList from './views/presentationals/ProjectList';


import './styles/App.css';


class App extends React.Component {
  public state = {};

  public handleItemClick = (event: React.MouseEvent<HTMLElement>, {name } : { name : string }) => this.setState({ activeItem: name });

  public render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact={true} path="/" component={Login}/>
          <Route path="/projectlist" component={ProjectList}/>
          <Route path="/project" component={ProjectViewRedux}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
