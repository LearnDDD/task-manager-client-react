import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, Switch, BrowserRouter as Router, Link} from "react-router-dom";
import RegisterTasks from "./pages/registerTasks";
import Tasks from "./pages/tasks";

ReactDOM.render(
  <React.StrictMode>
    <App />

      <Router>
        <Route exact path="/">
        </Route>
        <Route path="/tasks" component={Tasks}>
        </Route>
        <Route path="/tasks/register" component={RegisterTasks}>
        </Route>
    </Router>
  </React.StrictMode>,

document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
