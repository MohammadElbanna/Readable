import React from "react";
import Button from "./Button";
import styles from "./MainPageControls.css";

const MainPageControls = props => {
  return (
    <div className={styles.mainPageControlsContainer}>
      <Button type="new" text="Add post" />
      <div>
        <span className={styles.sortByLabel}>Sort by:</span>

        <p className={styles.inputContainer}>
          <input id="voteCount" type="radio" name="sort" />
          <label htmlFor="voteCount">Vote count</label>
        </p>

        <p className={styles.inputContainer}>
          <input id="timestamp" type="radio" name="sort" />
          <label htmlFor="timestamp">Time</label>
        </p>
      </div>
    </div>
  );
};

export default MainPageControls;
