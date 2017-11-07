import React from "react";
import styles from "./PostVotingControls.css";
import fontStyles from "font-awesome/css/font-awesome.css";

const PostVotingControls = props => {
  return (
    <div className={styles.container}>
      <a href="#">
        <i
          className={`${fontStyles.fa} ${fontStyles["fa-arrow-up"]}`}
          aria-hidden="true"
        />
      </a>
      <div className={styles.voteCount}>13</div>
      <a href="#">
        <i
          className={`${fontStyles.fa} ${fontStyles["fa-arrow-down"]}`}
          aria-hidden="true"
        />
      </a>
    </div>
  );
};

export default PostVotingControls;
