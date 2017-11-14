import React, { Component } from "react";
import styles from "./CommentModal.css";
import Modal from "react-modal";
import Button from "./Button";
import { v4 } from "uuid";

class CommentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: props.modalComment.body || "",
      author: props.modalComment.author || ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  saveComment = e => {
    e.preventDefault();
    const currentCommentId = this.props.modalComment.id;
    const timestamp = Date.now();
    if (currentCommentId) {
      this.props.onEdit(currentCommentId, this.state.comment, timestamp);
    } else {
      this.props.onNew({
        id: v4(),
        author: this.state.author,
        body: this.state.comment,
        parentId: this.props.postId,
        timestamp
      });
    }
  };

  render() {
    let currentComment = this.props.modalComment || {};
    return (
      <Modal
        className="modal"
        overlayClassName="overlay"
        isOpen={this.props.open}
        contentLabel="Modal"
      >
        <h2 className={styles.header}>
          {currentComment.body ? "Edit Comment" : "Add New Comment"}
        </h2>
        <form onSubmit={this.saveComment}>
          {!currentComment.body && (
            <label className={styles.label}>Author</label>
          )}
          {!currentComment.body && (
            <input
              className={styles.input}
              placeholder="Author name"
              value={this.state.author}
              name="author"
              onChange={this.handleInputChange}
              required
            />
          )}

          <label className={styles.label}>Comment</label>
          <textarea
            className={styles.textarea}
            rows="5"
            placeholder="Enter your comment here..."
            value={this.state.comment}
            name="comment"
            onChange={this.handleInputChange}
            required
          />

          <Button type="primary" text="Save" htmlType="submit" />
          <Button
            type="secondary"
            text="Cancel"
            htmlType="button"
            onClick={this.props.closeCommentModal}
          />
        </form>
      </Modal>
    );
  }
}

export default CommentModal;

/**

<h2 style="
    margin-bottom: 30px;
">Add New Comment</h2>
<form>
    <label style="
    margin-bottom: 7px;
    display: block;
    font-size: 18px;
">Author</label>
<input placeholder="Author" name="author" style="
    width: 100%;
    padding: 10px;
    height: 39px;
    box-sizing: border-box;
    font-size: 14px;
">

    <label style="
    margin-bottom: 7px;
    display: block;
    font-size: 18px;
    margin-top: 25px;
">Comment</label>

<textarea rows="5" placeholder="Enter your comment here" style="
    width: 100%;
    box-sizing: border-box;
    resize: none;
    border: 1px solid lightgrey;
    font-size: 14px;
    padding: 10px;
"></textarea></form>
 */
