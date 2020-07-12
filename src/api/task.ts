import { AxiosPromise } from 'axios';

import client from './client';
import {ComposingTask, Task} from '../models/task';

export interface TaskListResponse {
    tasks: Task[];
}

export const fetchTasks = (): AxiosPromise<TaskListResponse> => client.get(`/task/list`);
export const registerTask = (task: ComposingTask): AxiosPromise<void> => client.post(`/task/register`, task);
