import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import NotesProvider from './providers/NotesProvider';

ReactDOM.render(

    <Router>
        <NotesProvider>
            <App />
        </NotesProvider>
    </Router>

    , document.getElementById('root'));

serviceWorker.unregister();

