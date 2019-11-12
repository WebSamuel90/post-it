import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import UserProvider from './providers/UserProvider';

ReactDOM.render(

    <Router>
        <UserProvider>
                    <App />
        </UserProvider>
    </Router>

    , document.getElementById('root'));

serviceWorker.unregister();

