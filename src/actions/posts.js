import { normalize } from "normalizr";
import { postListSchema } from "./schema";
import { CLOSE_POST_MODAL } from "./ui";
import { API_DOMAIN } from "./const";

export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";

export const FETCH_POST_REQUEST = "FETCH_POST_REQUEST";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_ERROR = "FETCH_POST_ERROR";

export const INCREMENT_POST_VOTE = "INCREMENT_POST_VOTE";
export const DECREMENT_POST_VOTE = "DECREMENT_POST_VOTE";
export const INCREMENT_POST_VOTE_ERROR = "INCREMENT_POST_VOTE_ERROR";
export const DECREMENT_POST_VOTE_ERROR = "DECREMENT_POST_VOTE_ERROR";
export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "EDIT_POST";
export const NEW_POST = "NEW_POST";

export const fetchPosts = category => dispatch => {
  const url = category
    ? `${API_DOMAIN}/${category}/posts`
    : `${API_DOMAIN}/posts`;

  dispatch({ type: FETCH_POSTS_REQUEST });
  fetch(url, {
    headers: { Authorization: "whatever-you-want" }
  })
    .then(b => b.json())
    .then(response => {
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        response: normalize(response, postListSchema)
      });
    });
};

export const fetchPost = postId => dispatch => {
  dispatch({
    type: FETCH_POST_REQUEST
  });
  const url = `${API_DOMAIN}/posts/${postId}`;
  fetch(url, {
    headers: { Authorization: "whatever-you-want" }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then(b => b.json())
    .then(response => {
      dispatch({
        type: FETCH_POST_SUCCESS,
        response,
        postId
      });
    })
    .catch(() => {
      dispatch({
        type: FETCH_POST_ERROR
      });
    });
};

export const changePostVoteScore = (isIncrement, postId) => dispatch => {
  dispatch({
    type: isIncrement ? INCREMENT_POST_VOTE : DECREMENT_POST_VOTE,
    postId: postId
  });

  const url = `${API_DOMAIN}/posts/${postId}`;
  fetch(url, {
    method: "post",
    body: JSON.stringify({ option: isIncrement ? "upVote" : "downVote" }),
    mode: "cors",
    headers: {
      Authorization: "whatever-you-want",
      "Content-Type": "application/json"
    }
  }).catch(() => {
    // you should remove this catch
    alert("Couldn't change the vote score. please try again later!");
    dispatch({
      type: isIncrement ? INCREMENT_POST_VOTE_ERROR : DECREMENT_POST_VOTE_ERROR,
      postId: postId
    });
  });
};

export const deletePost = postId => dispatch => {
  const url = `${API_DOMAIN}/posts/${postId}`;
  fetch(url, {
    method: "delete",
    mode: "cors",
    headers: {
      Authorization: "whatever-you-want"
    }
  });
  dispatch({
    type: DELETE_POST,
    postId
  });
};

export const newPost = postPayload => dispatch => {
  const url = `${API_DOMAIN}/posts`;
  fetch(url, {
    method: "post",
    body: JSON.stringify(postPayload),
    mode: "cors",
    headers: {
      Authorization: "whatever-you-want",
      "Content-Type": "application/json"
    }
  });
  dispatch({
    type: NEW_POST,
    postData: {
      ...postPayload,
      voteScore: 1,
      deleted: false,
      commentCount: 0
    }
  });
  dispatch({
    type: CLOSE_POST_MODAL
  });
};

export const editPost = ({ id, body, title, timestamp }) => dispatch => {
  const url = `${API_DOMAIN}/posts/${id}`;
  fetch(url, {
    method: "put",
    body: JSON.stringify({ body, title, timestamp }),
    mode: "cors",
    headers: {
      Authorization: "whatever-you-want",
      "Content-Type": "application/json"
    }
  });
  dispatch({
    type: EDIT_POST,
    postId: id,
    postData: {
      title,
      body,
      timestamp
    }
  });
  dispatch({
    type: CLOSE_POST_MODAL
  });
};
