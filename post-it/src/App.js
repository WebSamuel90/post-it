import React from 'react';
import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import GlobalStyle from './styles/Global';
import './App.css';

import Home from './views';
import Host from './views/host';
import User from './views/user';

const history = createBrowserHistory()

const App = () => {
  return (
    <div className="App">
    
        <div history={history}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/host" exact component={Host}/>
          <Route path="/user" exact component={User}/>
        </Switch>
        <GlobalStyle />
        </div>

    </div>
  );
}

export default App;