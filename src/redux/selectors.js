export const getProjects = (store) => store.projects;
export const getProject = (store, id) => getProjects(store)[id] || null;
