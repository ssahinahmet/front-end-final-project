import client from "../api/client";
import type { Task } from "../types";
import useFetch from "./useFetch";

export function useTasks(projectId?: string) {
  return useFetch<Task[]>(() => client.get(`/projects/${projectId}/tasks`).then(r => r.data), [projectId]);
}

export function createTask(projectId: string, payload: Partial<Task>) {
  return client.post(`/projects/${projectId}/tasks`, payload).then(r => r.data as Task);
}

export function updateTask(taskId: string, payload: Partial<Task>) {
  return client.put(`/tasks/${taskId}`, payload).then(r => r.data as Task);
}

export function deleteTask(taskId: string) {
  return client.delete(`/tasks/${taskId}`).then(r => r.data);
}
