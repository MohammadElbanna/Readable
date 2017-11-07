import React from "react";
import styles from "./Main.css";
import Post from "../components/Post";
import CategoryAside from "../components/CategoryAside";
import MainPageControls from "../components/MainPageControls";
import fontStyles from "font-awesome/css/font-awesome.css";
import PostModal from "../components/PostModal";
import { Route } from "react-router-dom";

const Main = props => {
  return (
    <div className={styles.wrapper}>
      <MainPageControls />

      <main className={styles.main}>
        <div className={styles.posts}>
          <Post edit delete view />
          <Post edit delete view />
          <Post edit delete view />
        </div>
        <CategoryAside />
      </main>

      <PostModal renderModal />
    </div>
  );
};

export default Main;
