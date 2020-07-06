import { AxiosPromise } from 'axios';

import client from './client';
import { Task } from '../models/task';

export interface TaskListResponse {
    tasks: Task[];
}

export const fetchTasks = (): AxiosPromise<TaskListResponse> => client.get(`/task/list`);
