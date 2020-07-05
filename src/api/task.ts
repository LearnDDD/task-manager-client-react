import { AxiosPromise } from 'axios';

import client from './client';
import { Task } from '../models/task';

export const fetchTasks = (): AxiosPromise<Task[]> => client.get(`/task/list`);
