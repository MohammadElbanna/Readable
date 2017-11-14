import { categories } from "./categories";
import { postById, postIds } from "./posts";
import { commentById, commentIds } from "./comments";
import ui from "./ui";
import { combineReducers } from "redux";
import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS
} from "../actions/categories";
import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS
} from "../actions/comments";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR
} from "../actions/posts";

const isFetching = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        categories: true
      };
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        comments: true
      };
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        posts: true
      };
    case FETCH_POST_REQUEST:
      return {
        ...state,
        post: true
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: false
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: false
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: false
      };
    case FETCH_POST_SUCCESS:
    case FETCH_POST_ERROR:
      return {
        ...state,
        post: false
      };
    default:
      return state;
  }
};

export const postsByCategorySelector = (state, category) => {
  let { postById, postIds } = state;
  let sortByField = state.ui.sortBy;
  let postsByCategory;
  if (category) {
    postsByCategory = postIds.filter(
      postId =>
        postById[postId].category === category && !postById[postId].deleted
    );
  } else {
    postsByCategory = postIds.filter(postId => !postById[postId].deleted);
  }

  return postsByCategory.sort((postId_1, postId_2) => {
    return postById[postId_2][sortByField] - postById[postId_1][sortByField];
  });
};

export const commentsByPostSelector = state => {
  let { commentById, commentIds } = state;
  let comments = commentIds.filter(
    commentId => !commentById[commentId].deleted
  );
  return comments.sort((commentId_1, commentId_2) => {
    return (
      commentById[commentId_2].timestamp - commentById[commentId_1].timestamp
    );
  });
};

export const isCategoryFoundSelector = (state, category) => {
  return category === undefined
    ? true
    : state.categories.some(cat => cat.name === category);
};

export default combineReducers({
  categories,
  postById,
  postIds,
  commentById,
  commentIds,
  isFetching,
  ui
});
