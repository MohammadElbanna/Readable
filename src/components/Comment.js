import React from "react";
import styles from "./Comment.css";
import fontStyles from "font-awesome/css/font-awesome.css";

const Comment = ({ comment, ...props }) => {
  let timestamp = new Date(comment.timestamp).toLocaleDateString();
  let voteScoreClass =
    comment.voteScore > 0
      ? styles.voteScoreUp
      : comment.voteScore < 0 ? styles.voteScoreDown : styles.voteScoreZero;
  return (
    <div className={styles.wrapper}>
      <div className={styles.commentHeader}>
        <div>
          <span className={styles.author}>{comment.author}</span>
          <span className={styles.time}>{timestamp}</span>
        </div>
        <div>
          <i
            className={`${fontStyles.fa} ${fontStyles[
              "fa-pencil"
            ]} ${styles.commentAction}`}
            aria-hidden="true"
            onClick={() => props.openCommentModal(comment.body, comment.id)}
          />
          <i
            className={`${fontStyles.fa} ${fontStyles[
              "fa-times"
            ]} ${styles.commentAction}`}
            aria-hidden="true"
            onClick={() => props.onDeleteComment(comment.id, comment.parentId)}
          />
        </div>
      </div>

      <p className={styles.body}>{comment.body}</p>

      <div>
        <i
          className={`${fontStyles.fa} ${fontStyles[
            "fa-thumbs-up"
          ]} ${styles.commentAction}`}
          aria-hidden="true"
          onClick={() => props.onVoteChange(true, comment.id)}
        />
        <i
          className={`${fontStyles.fa} ${fontStyles[
            "fa-thumbs-down"
          ]} ${styles.commentAction}`}
          aria-hidden="true"
          onClick={() => props.onVoteChange(false, comment.id)}
        />
        <span className={`${styles.voteScore} ${voteScoreClass}`}>
          {comment.voteScore}
        </span>
      </div>
    </div>
  );
};

export default Comment;
