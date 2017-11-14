import React from "react";
import styles from "./CategoryAsideItem.css";
import { NavLink } from "react-router-dom";

const CategoryAsideItem = props => {
  return (
    <li className={styles.categoryItem}>
      <NavLink
        exact
        to={`${props.path}`}
        activeClassName={styles.selectedCategory}
      >
        {props.name}
      </NavLink>
    </li>
  );
};

export default CategoryAsideItem;
