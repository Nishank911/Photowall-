import posts from "../data/posts";
let inititalState = posts;

const postReducer = function posts(state = inititalState, action) {
  switch (action.type) {
    case "Remove_Posts":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    case "Add_Posts":
      return [...state, action.post];
    default:
      return state;
  }
};

export default postReducer;
