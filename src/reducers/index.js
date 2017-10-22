import { categoriesById, categoriesIds } from "./categories";
import { postsById, postsIds } from "./posts";
import { commentsById, commentsIds } from "./comments";
import { combineReducers } from "redux";
import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_COMMENTS_REQUEST,
  FETCH_POSTS_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_POSTS_SUCCESS,
  FETCH_COMMENTS_SUCCESS
} from "../actions";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
    case FETCH_COMMENTS_REQUEST:
    case FETCH_POSTS_REQUEST:
      return true;

    case FETCH_CATEGORIES_SUCCESS:
    case FETCH_POSTS_SUCCESS:
    case FETCH_COMMENTS_SUCCESS:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  categoriesById,
  categoriesIds,
  postsById,
  postsIds,
  commentsById,
  commentsIds,
  isFetching
});
