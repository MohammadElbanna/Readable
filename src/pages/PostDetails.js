import React from "react";
import Post from "../components/Post";
import CommentSection from "../components/CommentSection";
import styles from "./PostDetails.css";

const PostDetails = props => {
  return (
    <div className={styles.wrapper}>
      <Post edit delete />
      <CommentSection open />
    </div>
  );
};

export default PostDetails;
