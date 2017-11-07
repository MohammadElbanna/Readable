import React, { Component } from "react";
import styles from "./PostModal.css";
import Modal from "react-modal";
import Button from "./Button";

class PostModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: props.author,
      title: props.title,
      body: props.body,
      category: props.category
    };
  }

  handleInputChange = event => {
    let { target } = event;
    this.setState({
      [target.name]: target.value
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
        <h2 className={styles.header}>Add New Post</h2>
        <form>
          <label className={styles.label}>Author</label>
          <input
            className={styles.input}
            placeholder="Author name"
            value={this.state.author}
            onChange={this.handleInputChange}
            name="author"
          />

          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleInputChange}
            name="title"
          />

          <label className={styles.label}>Post body</label>
          <textarea
            className={styles.textarea}
            rows="5"
            placeholder="Enter your post here..."
            value={this.state.body}
            onChange={this.handleInputChange}
            name="body"
          />

          <label className={styles.label}>Category</label>
          <select
            className={styles.input}
            value={this.state.category}
            onChange={this.handleInputChange}
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>

          <Button type="save" />
        </form>
      </Modal>
    );
  }
}

export default PostModal;
