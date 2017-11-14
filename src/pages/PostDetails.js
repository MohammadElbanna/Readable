import React, { Component } from "react";
import Post from "../components/Post";
import CommentSection from "../components/CommentSection";
import { connect } from "react-redux";
import { commentsByPostSelector } from "../reducers";
import { Redirect, Route } from "react-router-dom";
import PostModal from "../components/PostModal";
import NotFoundPage from "./NotFoundPage";
import {
  fetchPost,
  changePostVoteScore,
  deletePost,
  editPost
} from "../actions/posts";
import {
  fetchCommentsByPost,
  changeCommentVoteScore,
  editComment,
  newComment,
  deleteComment
} from "../actions/comments";
import {
  openCommentModal,
  closeCommentModal,
  openPostModal,
  closePostModal
} from "../actions/ui";

class PostDetails extends Component {
  componentWillUnmount() {
    this.props.closePostModal();
    this.props.closeCommentModal();
  }

  componentDidMount() {
    this.props.fetchPost(this.props.postId);
    this.props.fetchCommentsByPost(this.props.postId);
  }

  render() {
    const {
      post,
      changePostVoteScore,
      deletePost,
      isFetching,
      commentIds,
      commentById,
      isModalOpen,
      modalComment,
      openCommentModal,
      closeCommentModal,
      openPostModal,
      editComment,
      newComment,
      deleteComment,
      changeCommentVoteScore,
      match
    } = this.props;

    return (
      <div>
        {post && (
          <Post
            post={post}
            onVoteChange={changePostVoteScore}
            onDelete={deletePost}
            openPostModal={openPostModal}
            edit
            delete
          />
        )}
        {post && (
          <CommentSection
            commentIds={commentIds}
            commentById={commentById}
            isModalOpen={isModalOpen}
            modalComment={modalComment}
            openCommentModal={openCommentModal}
            closeCommentModal={closeCommentModal}
            onEditComment={editComment}
            onNewComment={newComment}
            onDeleteComment={deleteComment}
            onVoteChange={changeCommentVoteScore}
            postId={post.id}
          />
        )}

        {!isFetching &&
          !post && <Route exact path={match.url} component={NotFoundPage} />}

        {post && post.deleted && <Redirect to="/" />}

        {this.props.isPostModalOpen && (
          <PostModal
            isOpen={this.props.isPostModalOpen}
            closePostModal={this.props.closePostModal}
            onEdit={this.props.editPost}
            currentPost={this.props.currentPost}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    post: state.postById[props.match.params.postId],
    postId: props.match.params.postId,
    commentById: state.commentById,
    commentIds: commentsByPostSelector(state),
    isFetching: state.isFetching.post,
    isModalOpen: state.ui.commentModal.isOpen,
    modalComment: state.ui.commentModal.currentComment,
    isPostModalOpen: state.ui.postModal.isOpen,
    currentPost: state.ui.postModal.currentPost
  };
};

export default connect(mapStateToProps, {
  fetchPost,
  changePostVoteScore,
  deletePost,
  fetchCommentsByPost,
  openCommentModal,
  closeCommentModal,
  openPostModal,
  changeCommentVoteScore,
  editComment,
  newComment,
  deleteComment,
  closePostModal,
  editPost
})(PostDetails);
