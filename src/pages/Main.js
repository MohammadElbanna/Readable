import React, { Component } from "react";
import styles from "./Main.css";
import Post from "../components/Post";
import CategoryAside from "../components/CategoryAside";
import MainPageControls from "../components/MainPageControls";
import NotFoundPage from "./NotFoundPage";
import LoadingIndicator from "../components/LoadingIndicator";
import PostModal from "../components/PostModal";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { postsByCategorySelector, isCategoryFoundSelector } from "../reducers";
import { fetchCategories } from "../actions/categories";
import {
  fetchPosts,
  changePostVoteScore,
  deletePost,
  editPost,
  newPost
} from "../actions/posts";
import {
  changeSortCriteria,
  openPostModal,
  closePostModal
} from "../actions/ui";

class Main extends Component {
  componentDidMount() {
    let { match, fetchCategories, fetchPosts } = this.props;
    fetchCategories();
    fetchPosts(match.params.category);
  }

  componentWillUnmount() {
    this.props.closePostModal();
  }

  componentDidUpdate(prevProp) {
    let { fetchPosts } = this.props;
    if (prevProp.match.params.category !== this.props.match.params.category) {
      fetchPosts(this.props.match.params.category);
    }
  }

  render() {
    const {
      postIds,
      posts,
      sortField,
      changeSortCriteria,
      changePostVoteScore,
      deletePost,
      openPostModal,
      isFetchingPosts,
      isCategoryFound,
      isFetchingCategories
    } = this.props;

    return (
      <div>
        {!isFetchingCategories &&
          isCategoryFound && (
            <div>
              <MainPageControls
                onSortChange={changeSortCriteria}
                sortField={sortField}
                openPostModal={openPostModal}
              />

              <main className={styles.main}>
                <div className={styles.posts}>
                  {this.props.isFetchingPosts ? (
                    <LoadingIndicator />
                  ) : (
                    postIds.map(postId => (
                      <Post
                        key={postId}
                        post={posts[postId]}
                        onVoteChange={changePostVoteScore}
                        onDelete={deletePost}
                        openPostModal={openPostModal}
                        edit
                        delete
                      />
                    ))
                  )}
                  {!postIds.length &&
                    !isFetchingPosts && (
                      <h3 className={styles.noMorePosts}>
                        There are no more posts to be shown for this category.
                      </h3>
                    )}
                </div>
                <CategoryAside categories={this.props.categories} />
              </main>

              {this.props.isPostModalOpen && (
                <PostModal
                  isOpen={this.props.isPostModalOpen}
                  closePostModal={this.props.closePostModal}
                  onEdit={this.props.editPost}
                  onNew={this.props.newPost}
                  categories={this.props.categories}
                  currentPost={this.props.currentPost}
                />
              )}
            </div>
          )}

        {isFetchingCategories && isFetchingPosts && <LoadingIndicator />}

        {!isFetchingCategories &&
          !isCategoryFound && (
            <Route exact path={this.props.match.url} component={NotFoundPage} />
          )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    categories: state.categories,
    postIds: postsByCategorySelector(state, props.match.params.category),
    posts: state.postById,
    sortField: state.ui.sortBy,
    isFetchingCategories: state.isFetching.categories,
    isFetchingPossts: state.isFetching.posts,
    isCategoryFound: isCategoryFoundSelector(
      state,
      props.match.params.category
    ),
    isPostModalOpen: state.ui.postModal.isOpen,
    currentPost: state.ui.postModal.currentPost,
    isFetchingPosts: state.isFetching.posts
  };
};

export default connect(mapStateToProps, {
  fetchCategories,
  fetchPosts,
  changeSortCriteria,
  changePostVoteScore,
  deletePost,
  openPostModal,
  closePostModal,
  editPost,
  newPost
})(Main);
