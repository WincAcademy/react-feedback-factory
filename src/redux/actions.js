export const Type = Object.freeze({
  ADD_PROJECT: "ADD_PROJECT"
});

export const addProject = (id, data) => {
  return {
    type: Type.ADD_PROJECT,
    payload: { id, data }
  }
};
