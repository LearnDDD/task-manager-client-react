import React, {useState} from "react";
import {ComposingTask, Task} from "../models/task";
import Tasks from "./tasks";
import {TextField} from "@material-ui/core";

export const RegisterTasks: React.FC = () => {
    const [task, setTaskList] = useState<ComposingTask | undefined>(undefined);

    return (
        <div>
            <TextField id="title" label="タイトル" />
            <TextField id="details" label="内容" />
        </div>
    )
};

export default RegisterTasks;
