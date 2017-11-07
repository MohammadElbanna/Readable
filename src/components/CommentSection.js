import React from "react";
import Modal from "react-modal";
import styles from "./CommentSection.css";
import Comment from "./Comment";
import Button from "./Button";
import CommentModal from "./CommentModal";

const CommentSection = props => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.commentSectionHeader}>
        Comments <span>(11)</span>
      </h4>
      <div className={styles.commentSectionBody}>
        <div className={styles.inputWrapper}>
          <Button small type="comment" text="Add new comment" />
        </div>
        <Comment />
        <Comment />
      </div>

      <CommentModal renderModal />
    </div>
  );
};

export default CommentSection;
