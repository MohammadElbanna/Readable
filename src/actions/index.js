export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
export const FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST";

export const fetchCategories = () => dispatch => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });
  fetch("/categories", {
    headers: { Authorization: "whatever-you-want" }
  })
    .then(b => b.json())
    .then(response => {
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, response });
    });
};

export const fetchPosts = categoryId => dispatch => {
  const url = categoryId ? `/${categoryId}/posts` : `/posts`;

  dispatch({ type: FETCH_POSTS_REQUEST });
  fetch(url, {
    headers: { Authorization: "whatever-you-want" }
  })
    .then(b => b.json())
    .then(response => {
      dispatch({ type: FETCH_POSTS_SUCCESS, response });
    });
};

export const fetchCommentsByPost = postId => dispatch => {
  const url = postId ? `/${postId}/posts` : `/posts`;

  dispatch({ type: FETCH_COMMENTS_REQUEST });
  fetch(url, {
    headers: { Authorization: "whatever-you-want" }
  })
    .then(b => b.json())
    .then(response => {
      dispatch({ type: FETCH_POSTS_SUCCESS, response });
    });
};
