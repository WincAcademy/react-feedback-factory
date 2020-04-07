export const Type = Object.freeze({
  ADD_PROJECT: "ADD_PROJECT",
  REMOVE_PROJECT: "REMOVE_PROJECT"
});

export const addProject = (id, data) => {
  return {
    type: Type.ADD_PROJECT,
    payload: { id, data }
  }
};

export const removeProject = (id) => {
  return {
    type: Type.REMOVE_PROJECT,
    payload: { id }
  }
};
