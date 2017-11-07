import React from "react";
import styles from "./Comment.css";
import fontStyles from "font-awesome/css/font-awesome.css";

const Comment = props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.commentHeader}>
        <div>
          <span className={styles.author}>Mohammad</span>
          <span className={styles.time}>12/12/2090</span>
        </div>
        <div>
          <i
            className={`${fontStyles.fa} ${fontStyles[
              "fa-pencil"
            ]} ${styles.commentAction}`}
            aria-hidden="true"
          />
          <i
            className={`${fontStyles.fa} ${fontStyles[
              "fa-times"
            ]} ${styles.commentAction}`}
            aria-hidden="true"
          />
        </div>
      </div>

      <p className={styles.body}>
        This is my awesome comment on theis post. I don't fint that very useful.
      </p>

      <div>
        <i
          className={`${fontStyles.fa} ${fontStyles[
            "fa-thumbs-up"
          ]} ${styles.commentAction}`}
          aria-hidden="true"
        />
        <i
          className={`${fontStyles.fa} ${fontStyles[
            "fa-thumbs-down"
          ]} ${styles.commentAction}`}
          aria-hidden="true"
        />
        <span className={styles.numberOfVotes}>5</span>
      </div>
    </div>
  );
};

export default Comment;
