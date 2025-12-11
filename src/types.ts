export interface UserPayload {
  _id: string;
  username: string;
  email: string;
  role?: string;
}

export interface Project {
  _id: string;
  name: string;
  description: string;
  user: string;
}

export interface Task {
  _id: string;
  name: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  project: string;
}
