import React from "react";
import styles from "./Header.css";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <header className={styles.header}>
      <Link to="/">Awesome Readable</Link>
    </header>
  );
};

export default Header;
