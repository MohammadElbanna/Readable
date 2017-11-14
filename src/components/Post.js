import React from "react";
import styles from "./Post.css";
import PostVotingControls from "./PostVotingControls";
import Button from "./Button.js";
import fontStyles from "font-awesome/css/font-awesome.css";
import { Link } from "react-router-dom";

const Post = ({ match, ...props }) => {
  let {
    id,
    title,
    author,
    body,
    commentCount,
    category,
    timestamp,
    voteScore
  } = props.post;

  timestamp = new Date(timestamp).toLocaleDateString();

  return (
    <div className={styles.postContainer}>
      <div className={styles.body}>
        <div className={styles.postActions}>
          {props.delete && (
            <Button small type="delete" onClick={() => props.onDelete(id)} />
          )}
          {props.edit && (
            <Button
              small
              type="edit"
              onClick={() => props.openPostModal({ title, body, id })}
            />
          )}
          {props.view && <Button small type="view" />}
        </div>
        <Link to={`/${category}/${id}`}>
          <h3 className={styles.title}>{title}</h3>
        </Link>
        <span className={styles.info}>
          Posted by {author} on {timestamp}
        </span>
        <p className={styles.summary}>{body}</p>
        <div className={styles.postBottomContainer}>
          <Link to={`/${category}`} className={styles.postTag}>
            {category}
          </Link>
          <span className={styles.commentsLink}>
            {commentCount}
            <i
              className={`${fontStyles.fa} ${fontStyles["fa-comment"]}`}
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
      <PostVotingControls
        voteScore={voteScore}
        onVoteChange={props.onVoteChange}
        postId={id}
      />
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
