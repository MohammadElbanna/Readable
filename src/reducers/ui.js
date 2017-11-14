import {
  CLOSE_COMMENT_MODAL,
  OPEN_COMMENT_MODAL,
  CLOSE_POST_MODAL,
  OPEN_POST_MODAL,
  CHANGE_SORT
} from "../actions/ui";
import { combineReducers } from "redux";

const modalInitialState = {
  isOpen: false
};

const commentModal = (state = modalInitialState, action) => {
  switch (action.type) {
    case CLOSE_COMMENT_MODAL:
      return {
        isOpen: false
      };
    case OPEN_COMMENT_MODAL:
      return {
        isOpen: true,
        currentComment: action.currentComment
      };
    default:
      return state;
  }
};

const postModal = (state = modalInitialState, action) => {
  switch (action.type) {
    case CLOSE_POST_MODAL:
      return {
        isOpen: false
      };
    case OPEN_POST_MODAL:
      return {
        isOpen: true,
        currentPost: action.currentPost
      };
    default:
      return state;
  }
};

const sortBy = (state = "timestamp", action) => {
  let { type, sortField } = action;
  switch (type) {
    case CHANGE_SORT:
      return sortField;
    default:
      return state;
  }
};

export default combineReducers({ commentModal, postModal, sortBy });
