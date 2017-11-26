import { normalize } from "normalizr";
import { commentListSchema } from "./schema";
import { CLOSE_COMMENT_MODAL } from "./ui";
import { API_DOMAIN } from "./const";

export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const NEW_COMMENT = "NEW_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const INCREMENT_COMMENT_VOTE = "INCREMENT_COMMENT_VOTE";
export const DECREMENT_COMMENT_VOTE = "DECREMENT_COMMENT_VOTE";

export const fetchCommentsByPost = postId => dispatch => {
  const url = `${API_DOMAIN}/posts/${postId}/comments`;

  dispatch({ type: FETCH_COMMENTS_REQUEST });
  fetch(url, {
    headers: { Authorization: "whatever-you-want" }
  })
    .then(b => b.json())
    .then(response => {
      dispatch({
        type: FETCH_COMMENTS_SUCCESS,
        response: normalize(response, commentListSchema)
      });
    });
};

export const deleteComment = (commentId, postId) => dispatch => {
  const url = `${API_DOMAIN}/comments/${commentId}`;
  fetch(url, {
    method: "delete",
    mode: "cors",
    headers: {
      Authorization: "whatever-you-want"
    }
  });
  dispatch({
    type: DELETE_COMMENT,
    commentId,
    postId
  });
};

export const editComment = (commentId, body, timestamp) => dispatch => {
  const url = `${API_DOMAIN}/comments/${commentId}`;
  fetch(url, {
    method: "put",
    body: JSON.stringify({ body, timestamp }),
    mode: "cors",
    headers: {
      Authorization: "whatever-you-want",
      "Content-Type": "application/json"
    }
  });
  dispatch({
    type: EDIT_COMMENT,
    commentId,
    commentData: {
      body,
      timestamp
    }
  });
  dispatch({
    type: CLOSE_COMMENT_MODAL
  });
};

export const newComment = commentPayload => dispatch => {
  const url = `${API_DOMAIN}/comments`;
  fetch(url, {
    method: "post",
    body: JSON.stringify(commentPayload),
    mode: "cors",
    headers: {
      Authorization: "whatever-you-want",
      "Content-Type": "application/json"
    }
  });
  dispatch({
    type: NEW_COMMENT,
    commentData: {
      ...commentPayload,
      voteScore: 1,
      parentDeleted: false,
      deleted: false
    },
    postId: commentPayload.parentId
  });
  dispatch({
    type: CLOSE_COMMENT_MODAL
  });
};

export const changeCommentVoteScore = (isIncrement, commentId) => dispatch => {
  dispatch({
    type: isIncrement ? INCREMENT_COMMENT_VOTE : DECREMENT_COMMENT_VOTE,
    commentId: commentId
  });
  const url = `${API_DOMAIN}/comments/${commentId}`;
  fetch(url, {
    method: "post",
    body: JSON.stringify({ option: isIncrement ? "upVote" : "downVote" }),
    mode: "cors",
    headers: {
      Authorization: "whatever-you-want",
      "Content-Type": "application/json"
    }
  });
};
