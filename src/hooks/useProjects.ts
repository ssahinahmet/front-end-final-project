import client from "../api/client";
import type { Project } from "../types";
import useFetch from "./useFetch";

export function useAllProjects() {
  return useFetch<Project[]>(() => client.get("/projects").then(r => r.data), []);
}

export function createProject(payload: { name: string; description: string }) {
  return client.post("/projects", payload).then(r => r.data as Project);
}

export function updateProject(projectId: string, payload: Partial<Project>) {
  return client.put(`/projects/${projectId}`, payload).then(r => r.data as Project);
}

export function deleteProject(projectId: string) {
  return client.delete(`/projects/${projectId}`).then(r => r.data);
}