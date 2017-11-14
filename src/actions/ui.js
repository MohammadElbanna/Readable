export const CLOSE_POST_MODAL = "CLOSE_POST_MODAL";
export const OPEN_POST_MODAL = "OPEN_POST_MODAL";
export const CHANGE_SORT = "CHANGE_SORT";
export const CLOSE_COMMENT_MODAL = "CLOSE_COMMENT_MODAL";
export const OPEN_COMMENT_MODAL = "OPEN_COMMENT_MODAL";

export const changeSortCriteria = sortField => ({
  type: CHANGE_SORT,
  sortField: sortField
});

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
