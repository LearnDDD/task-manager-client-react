import React, { useEffect, useState } from 'react';
import { AxiosPromise, AxiosResponse } from 'axios';

import { TaskListResponse, fetchTasks } from '../api/task';
import { Task } from '../models/task';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {TableContainer} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import RegisterTasks from "./registerTasks";
import {Link, BrowserRouter as Router, Switch, Route} from "react-router-dom";

export const Tasks: React.FC = () => {
    const [taskList, setTaskList] = useState<Task[] | undefined>([]);

    const fetchTasksReq = async () => {
        try {
            const response: AxiosResponse<TaskListResponse> = await fetchTasks();
            const data: TaskListResponse = response.data;
            return data.tasks;
        } catch (e) {
            console.log(e);
        }
    };

    const useStyles = makeStyles({
        button: {
            backgroundColor: 'green'
        },
        table: {
            minWidth: 650,
        },
    });

    useEffect(() => {
        const data = fetchTasksReq();
        data.then(setTaskList);
    }, []);

    const classes = useStyles();
    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">タイトル</TableCell>
                            <TableCell align="right">内容</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {taskList && taskList.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell align="right">{task.id}</TableCell>
                                <TableCell align="right" component="th" scope="row">
                                    {task.title}
                                </TableCell>
                                <TableCell align="right">{task.details}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button className={classes.button}>新規作成</Button>


            <Link to="/tasks/register">登録画面</Link>

        </div>
    );
};

export default Tasks;
