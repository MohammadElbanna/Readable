import React from "react";
import styles from "./Post.css";
import PostVotingControls from "./PostVotingControls";
import Button from "./Button.js";
import fontStyles from "font-awesome/css/font-awesome.css";

const Post = props => {
  return (
    <div className={styles.body}>
      <div>
        <div className={styles.postActions}>
          {props.delete && <Button small type="delete" />}
          {props.edit && <Button small type="edit" />}
          {props.view && <Button small type="view" />}
        </div>
        <h3 className={styles.title}>This is my title</h3>
        <span className={styles.info}>Posted by ELBANNA in DOWNLOADS</span>
        <p className={styles.summary}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className={styles.postBottomContainer}>
          <a href="#" className={styles.postTag}>
            java
          </a>
          <span className={styles.commentsLink}>
            45
            <i
              className={`${fontStyles.fa} ${fontStyles["fa-comment"]}`}
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
      <PostVotingControls />
    </div>
  );
};

export default Post;

/*

<div style="
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
">
    <a class="Post__postTag___u4zmR">java</a>
    <a id="memo" href="#" style="
    text-decoration: none;
    color: #898f9c;
    font-size: 16px;
">45 comments
</a>
</div>


*/
