import React, { Component } from "react";
import styles from "./PostModal.css";
import Modal from "react-modal";
import Button from "./Button";
import { v4 } from "uuid";

class PostModal extends Component {
  constructor(props) {
    super(props);
    let { currentPost, categories } = props;
    this.state = {
      title: currentPost.title || "",
      body: currentPost.body || "",
      category: categories ? categories[0].name : "",
      author: ""
    };
  }

  handleInputChange = event => {
    let { target } = event;
    this.setState({
      [target.name]: target.value
    });
  };

  savePost = e => {
    e.preventDefault();
    const openedPostId = this.props.currentPost.id;
    const timestamp = Date.now();
    if (openedPostId) {
      this.props.onEdit({
        id: openedPostId,
        body: this.state.body,
        title: this.state.title,
        timestamp
      });
    } else {
      this.props.onNew({
        id: v4(),
        author: this.state.author,
        body: this.state.body,
        title: this.state.title,
        category: this.state.category,
        timestamp
      });
    }
  };

  render() {
    let currentPost = this.props.currentPost || {};
    let categories = this.props.categories || [];
    return (
      <Modal
        className="modal"
        overlayClassName="overlay"
        isOpen={this.props.isOpen}
        contentLabel="Modal"
      >
        <h2 className={styles.header}>
          {currentPost.id ? "Edit Post" : "Add New Post"}
        </h2>
        <form onSubmit={this.savePost}>
          {!currentPost.id && (
            <div>
              <label className={styles.label}>Author</label>
              <input
                required
                className={styles.input}
                placeholder="Author name"
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
              />
            </div>
          )}

          <div>
            <label className={styles.label}>Title</label>
            <input
              required
              className={styles.input}
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
            />
          </div>

          <div>
            <label className={styles.label}>Post body</label>
            <textarea
              required
              className={styles.textarea}
              rows="5"
              placeholder="Enter your post here..."
              value={this.state.body}
              onChange={this.handleInputChange}
              name="body"
            />
          </div>

          {!currentPost.id && (
            <div>
              <label className={styles.label}>Category</label>
              <select
                required
                className={styles.input}
                value={this.state.category}
                onChange={this.handleInputChange}
                name="category"
              >
                {categories.map(cat => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <Button type="primary" text="Save" htmlType="submit" />
          <Button
            type="secondary"
            text="Cancel"
            htmlType="button"
            onClick={this.props.closePostModal}
          />
        </form>
      </Modal>
    );
  }
}

export default PostModal;
