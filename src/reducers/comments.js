import {
  FETCH_COMMENTS_SUCCESS,
  INCREMENT_COMMENT_VOTE,
  DECREMENT_COMMENT_VOTE,
  EDIT_COMMENT,
  NEW_COMMENT,
  DELETE_COMMENT
} from "../actions/comments";

export const commentById = (state = {}, { commentId, response, ...action }) => {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      // Every time I retrieve a list of comments, I remove the old list completely
      return response.entities.comments || {};
    case INCREMENT_COMMENT_VOTE:
      return {
        ...state,
        [commentId]: {
          ...state[commentId],
          voteScore: state[commentId].voteScore + 1
        }
      };
    case DECREMENT_COMMENT_VOTE:
      return {
        ...state,
        [commentId]: {
          ...state[commentId],
          voteScore: state[commentId].voteScore - 1
        }
      };
    case EDIT_COMMENT:
      return {
        ...state,
        [commentId]: {
          ...state[commentId],
          ...action.commentData
        }
      };
    case NEW_COMMENT:
      return {
        ...state,
        [action.commentData.id]: {
          ...action.commentData
        }
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [commentId]: {
          ...state[commentId],
          deleted: true
        }
      };
    default:
      return state;
  }
};

export const commentIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return action.response.result;
    case NEW_COMMENT:
      return [...state, action.commentData.id];
    default:
      return state;
  }
};
