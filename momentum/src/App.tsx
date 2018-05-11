import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import Login from './views/presentationals/Login';
import ProjectList from './views/presentationals/ProjectList';
import ProjectView from './views/presentationals/ProjectView';


import './styles/App.css';


class App extends React.Component {
  public state = {};

  public handleItemClick = (event: React.MouseEvent<HTMLElement>, {name } : { name : string }) => this.setState({ activeItem: name });

  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Login}/>
          <Route path="/projectlist" component={ProjectList}/>
          <Route path="/project" component={ProjectView}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
