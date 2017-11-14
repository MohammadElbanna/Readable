import React from "react";
import styles from "./PostVotingControls.css";
import fontStyles from "font-awesome/css/font-awesome.css";

const PostVotingControls = props => {
  const { onVoteChange, postId, voteScore } = props;
  return (
    <div className={styles.container}>
      <span onClick={() => onVoteChange(true, postId)}>
        <i
          className={`${fontStyles.fa} ${fontStyles["fa-arrow-up"]}`}
          aria-hidden="true"
        />
      </span>
      <div className={styles.voteScore}>{voteScore}</div>
      <span onClick={() => onVoteChange(false, postId)}>
        <i
          className={`${fontStyles.fa} ${fontStyles["fa-arrow-down"]}`}
          aria-hidden="true"
        />
      </span>
    </div>
  );
};

export default PostVotingControls;
