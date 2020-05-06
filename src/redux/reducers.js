import { Type } from "./actions";

const initialState = {
  projects: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Type.ADD_PROJECT: {
      const { id, data } = action.payload;

      return {
        ...state,
        projects: {
          ...state.projects,
          [id]: data
        }
      };
    }
    case Type.REMOVE_PROJECT: {
      const projects = { ...state.projects };
      delete projects[action.payload.id];

      return {
        ...state,
        projects
      };
    }
    case Type.SET_PROJECT_REVIEW: {
      const { id, data } = action.payload;
      const project = state.projects[id];

      if (project) {
        project.review = data;
      }

      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

