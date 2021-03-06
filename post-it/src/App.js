import React from 'react';
import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import GlobalStyle from './styles/Global';
import './App.css';

import Home from './views';
import Board from './views/board';

const history = createBrowserHistory()

const App = () => {
	return (
		<div className="App">
    
			<div history={history}>
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/board/:id" exact component={Board}/>
			</Switch>
			<GlobalStyle />
			</div>

    	</div>
  	);
}

export default App;