import React, { Component } from "react";
import styles from "./CommentModal.css";
import Modal from "react-modal";
import { connect } from "react-redux";
import Button from "./Button";

class CommentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      input: ""
    };
  }

  handleAuthorChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  handleCommentChange = event => {
    this.setState({
      comment: event.target.value
    });
  };

  render() {
    return (
      <Modal
        className="modal"
        overlayClassName="overlay"
        isOpen={this.props.renderModal}
        contentLabel="Modal"
      >
        <h2 className={styles.header}>Add New Comment</h2>
        <form>
          <label className={styles.label}>Author</label>
          <input
            className={styles.input}
            placeholder="Author name"
            value={this.state.author}
            onChange={this.handleAuthorChange}
          />

          <label className={styles.label}>Comment</label>
          <textarea
            className={styles.textarea}
            rows="5"
            placeholder="Enter your comment here..."
            value={this.state.comment}
            onChange={this.handleCommentChange}
          />

          <Button type="save" />
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

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
