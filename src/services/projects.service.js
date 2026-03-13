import { projectsData } from "../data/projects.data";

export async function getProjects() {
  return Promise.resolve(projectsData);
}

