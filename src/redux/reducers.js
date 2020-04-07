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
    default:
      return state;
  }
}

