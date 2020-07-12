import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {TasksRouter} from "./pages/tasksRouter";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/tasks">タスク一覧</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" />
                    <Route path="/tasks" component={TasksRouter} />
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

