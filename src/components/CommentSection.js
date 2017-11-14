import React from "react";
import styles from "./CommentSection.css";
import Comment from "./Comment";
import Button from "./Button";
import CommentModal from "./CommentModal";

const CommentSection = ({
  isModalOpen,
  commentById,
  commentIds,
  onVoteChange,
  modalComment,
  openCommentModal,
  closeCommentModal,
  onEditComment,
  onNewComment,
  onDeleteComment,
  postId
}) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.commentSectionHeader}>
        Comments <span>({commentIds.length})</span>
      </h4>
      <div className={styles.commentSectionBody}>
        <div className={styles.inputWrapper}>
          <Button
            small
            type="primary"
            text="Add new comment"
            onClick={() => openCommentModal()}
          />
        </div>
        {commentIds.map(commentId => (
          <Comment
            onVoteChange={onVoteChange}
            key={commentId}
            comment={commentById[commentId]}
            openCommentModal={openCommentModal}
            onDeleteComment={onDeleteComment}
          />
        ))}
        {/* <Comment /> */}
      </div>

      {isModalOpen && (
        <CommentModal
          open={isModalOpen}
          modalComment={modalComment}
          closeCommentModal={closeCommentModal}
          postId={postId}
          onEdit={onEditComment}
          onNew={onNewComment}
        />
      )}
    </div>
  );
};

export default CommentSection;
