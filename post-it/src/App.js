import React from 'react';
import Application from './components/Application';
import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import './App.css';

import Home from './views/home';
import Host from './views/host';
import User from './views/user';

const history = createBrowserHistory()

function App() {
  return (
    <div className="App">
    
        <div history={history}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/host" exact component={Host}/>
          <Route path="/user" exact component={User}/>
    
         
          <Application />
        </Switch>
        </div>
     
    </div>
  );
}

export default App;