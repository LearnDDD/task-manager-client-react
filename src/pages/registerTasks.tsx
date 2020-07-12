import React, {ChangeEvent, useEffect, useState} from "react";
import {ComposingTask, Task} from "../models/task";
import Tasks from "./tasks";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import client from "../api/client";
import {AxiosResponse} from "axios";
import {registerTask, TaskListResponse} from "../api/task";

export const RegisterTasks: React.FC = () => {
    const [task, setTask] = useState<ComposingTask>({title: '', details: ''});
    const useStyles = makeStyles({
        button: {
            backgroundColor: 'green'
        },
        table: {
            minWidth: 650,
        },
    });
    const classes = useStyles();

    useEffect(() => {
        console.log(task)
    }, []);

    const onClickRegister = async () => {
        try {
            const response = await registerTask(task);
            console.log(response)
        } catch (e) {
            console.log(e);
        }
    };

    function inputTitle(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setTask({
                title: event.target.value,
                details: task.details
            })
    }

    function inputDetail(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setTask({
            title: task.title,
            details:event.target.value
        })
    }

    return (
        <div>
            <TextField id="title" label="タイトル" value={task.title} onChange={inputTitle}/>
            <TextField id="details" label="内容" value={task.details} onChange={inputDetail}/>
            <Button className={classes.button} onClick={onClickRegister}>新規作成</Button>
        </div>
    )
};

export default RegisterTasks;
