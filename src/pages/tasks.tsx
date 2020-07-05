import React, { useEffect, useState } from 'react';

import { fetchTasks } from '../api/task';
import { Task } from '../models/task';

export const Tasks: React.FC = () => {
    const [taskList, setTaskList] = useState<Task[] | undefined>(undefined);

    const fetchTasksReq = async () => {
        try {
            const { data } = await fetchTasks();
            return data;
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const data = fetchTasksReq();
        data.then(tasks => {
            setTaskList(tasks);
        });
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
