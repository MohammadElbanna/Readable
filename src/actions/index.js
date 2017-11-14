import { normalize } from "normalizr";
import { postListSchema, commentListSchema } from "./schema";

export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
export const FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST";

export const FETCH_POST_REQUEST = "FETCH_POST_REQUEST";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_ERROR = "FETCH_POST_ERROR";

export const CLOSE_POST_MODAL = "CLOSE_POST_MODAL";
export const OPEN_POST_MODAL = "OPEN_POST_MODAL";

export const CHANGE_SORT = "CHANGE_SORT";
export const INCREMENT_POST_VOTE = "INCREMENT_POST_VOTE";
export const DECREMENT_POST_VOTE = "DECREMENT_POST_VOTE";
export const INCREMENT_POST_VOTE_ERROR = "INCREMENT_POST_VOTE_ERROR";
export const DECREMENT_POST_VOTE_ERROR = "DECREMENT_POST_VOTE_ERROR";
export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "EDIT_POST";
export const NEW_POST = "NEW_POST";

export const CLOSE_COMMENT_MODAL = "CLOSE_COMMENT_MODAL";
export const OPEN_COMMENT_MODAL = "OPEN_COMMENT_MODAL";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const NEW_COMMENT = "NEW_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const INCREMENT_COMMENT_VOTE = "INCREMENT_COMMENT_VOTE";
export const DECREMENT_COMMENT_VOTE = "DECREMENT_COMMENT_VOTE";

const API_DOMAIN = "http://localhost:3001";

export const fetchCategories = () => dispatch => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });
  fetch(`${API_DOMAIN}/categories`, {
    headers: { Authorization: "whatever-you-want" }
  })
    .then(b => b.json())
    .then(response => {
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, response });
    });
};

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

export const changeSortCriteria = sortField => ({
  type: CHANGE_SORT,
  sortField: sortField
});

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

export const openPostModal = ({ title, body, id }) => ({
  type: OPEN_POST_MODAL,
  currentPost: {
    title,
    body,
    id
  }
});

export const closePostModal = () => ({
  type: CLOSE_POST_MODAL
});

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

export const openCommentModal = (commentBody, commentId) => ({
  type: OPEN_COMMENT_MODAL,
  currentComment: {
    body: commentBody,
    id: commentId
  }
});

export const closeCommentModal = () => ({
  type: CLOSE_COMMENT_MODAL
});

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
