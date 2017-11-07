import { FETCH_COMMENTS_SUCCESS } from "../actions";

export const commentsById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return action.response;
    default:
      return state;
  }
};

export const commentsIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return action.response.forEach(comment => comment.id);
    default:
      return state;
  }
};
