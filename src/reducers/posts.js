import {
  FETCH_POSTS_SUCCESS,
  FETCH_POST_SUCCESS,
  INCREMENT_POST_VOTE,
  DECREMENT_POST_VOTE,
  INCREMENT_POST_VOTE_ERROR,
  DECREMENT_POST_VOTE_ERROR,
  DELETE_POST,
  NEW_POST,
  EDIT_POST
} from "../actions/posts";
import { NEW_COMMENT, DELETE_COMMENT } from "../actions/comments";

export const postById = (state = {}, { postId, response, ...action }) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return { ...state, ...response.entities.posts };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        [postId]: Object.keys(response).length === 0 ? undefined : response
      };
    case INCREMENT_POST_VOTE:
      return {
        ...state,
        [postId]: {
          ...state[postId],
          voteScore: state[postId].voteScore + 1
        }
      };
    case DECREMENT_POST_VOTE:
      return {
        ...state,
        [postId]: {
          ...state[postId],
          voteScore: state[postId].voteScore - 1
        }
      };
    case INCREMENT_POST_VOTE_ERROR:
      return {
        ...state,
        [postId]: {
          ...state[postId],
          voteScore: state[postId].voteScore - 1
        }
      };
    case DECREMENT_POST_VOTE_ERROR:
      return {
        ...state,
        [postId]: {
          ...state[postId],
          voteScore: state[postId].voteScore + 1
        }
      };
    case DELETE_POST:
      return {
        ...state,
        [postId]: {
          ...state[postId],
          deleted: true
        }
      };
    case NEW_POST:
      return {
        ...state,
        [action.postData.id]: {
          ...action.postData
        }
      };
    case EDIT_POST:
      return {
        ...state,
        [postId]: {
          ...state[postId],
          ...action.postData
        }
      };
    case NEW_COMMENT:
      return {
        ...state,
        [postId]: {
          ...state[postId],
          commentCount: state[postId].commentCount + 1
        }
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [postId]: {
          ...state[postId],
          commentCount: state[postId].commentCount - 1
        }
      };

    default:
      return state;
  }
};

export const postIds = (state = [], { type, response, ...action }) => {
  switch (type) {
    case FETCH_POSTS_SUCCESS:
      return [...new Set([...state, ...response.result])];
    case FETCH_POST_SUCCESS:
      return response.id ? [...new Set([...state, response.id])] : [...state];
    case NEW_POST:
      return [...state, action.postData.id];
    default:
      return state;
  }
};
