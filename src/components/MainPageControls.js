import React from "react";
import Button from "./Button";
import styles from "./MainPageControls.css";

const MainPageControls = props => {
  let { onSortChange, sortField } = props;
  return (
    <div className={styles.mainPageControlsContainer}>
      <Button
        type="new"
        text="Add post"
        onClick={() => props.openPostModal({})}
      />

      <div>
        <span className={styles.sortByLabel}>Sort by:</span>

        <p className={styles.inputContainer}>
          <input
            id="voteScore"
            type="radio"
            onChange={() => onSortChange("voteScore")}
            checked={sortField === "voteScore"}
          />
          <label htmlFor="voteScore">Vote count</label>
        </p>

        <p className={styles.inputContainer}>
          <input
            id="timestamp"
            type="radio"
            onChange={() => onSortChange("timestamp")}
            checked={sortField === "timestamp"}
          />
          <label htmlFor="timestamp">Time</label>
        </p>
      </div>
    </div>
  );
};

export default MainPageControls;
