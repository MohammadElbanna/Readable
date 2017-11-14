import React from "react";
import styles from "./CategoryAside.css";
import CategoryAsideItem from "./CategoryAsideItem";

const CategoryAside = props => {
  return (
    <div className={styles.categoriesAside}>
      <h2 className={styles.header}>Categories</h2>
      <ul className={styles.categoriesList}>
        {props.categories.map(cat => (
          <CategoryAsideItem
            key={cat.name}
            name={cat.name}
            path={`/${cat.path}`}
          />
        ))}
        <CategoryAsideItem name="All categories" path="/" />
      </ul>
    </div>
  );
};

export default CategoryAside;
