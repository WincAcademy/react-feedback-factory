export const Type = Object.freeze({
  ADD_PROJECT: "ADD_PROJECT",
  REMOVE_PROJECT: "REMOVE_PROJECT",
  SET_PROJECT_REVIEW: "SET_PROJECT_REVIEW"
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

export const setProjectReview = (id, data) => {
  return {
    type: Type.SET_PROJECT_REVIEW,
    payload: { id, data }
  }
};
