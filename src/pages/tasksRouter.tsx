import React from "react";
import {Route} from "react-router-dom";
import Tasks from "./tasks";
import RegisterTasks from "./registerTasks";

export const TasksRouter: React.FC = () => {

    return (
        <div>
            <Route exact path='/tasks' component={Tasks} />
            <Route path='/tasks/register' component={RegisterTasks} />
        </div>
    );
}
