import { FETCH_POSTS_SUCCESS } from "../actions";

export const postsById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return action.response;
    default:
      return state;
  }
};

export const postsIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return action.response.forEach(post => post.id);
    default:
      return state;
  }
};
