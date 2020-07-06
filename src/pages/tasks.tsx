import React, { useEffect, useState } from 'react';
import { AxiosPromise, AxiosResponse } from 'axios';

import { TaskListResponse, fetchTasks } from '../api/task';
import { Task } from '../models/task';

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

    useEffect(() => {
        const data = fetchTasksReq();
        data.then(setTaskList);
    }, []);

    return (
        <>
            <h1>Task List</h1>
            {
                taskList && taskList.map((task) => {
                    return (
                        <p key={task.id}>{`${task.title} ${task.details}`}</p>
                    );
                })
            }
        </>
    );
};

export default Tasks;
