import React from "react";
import styles from "./Button.css";
import fontStyles from "font-awesome/css/font-awesome.css";

const Button = ({ small, type, link, text, disabled }) => {
  let iconClass,
    buttonClass,
    buttonText = "";
  switch (type) {
    case "edit":
      iconClass = `${fontStyles.fa} ${fontStyles[
        "fa-pencil-square"
      ]} ${styles.edit}`;
      buttonText = text ? text : "Edit";
      break;
    case "view":
      iconClass = `${fontStyles.fa} ${fontStyles["fa-eye"]} ${styles.view}`;
      buttonText = text ? text : "View";
      break;
    case "delete":
      iconClass = `${fontStyles.fa} ${fontStyles[
        "fa-window-close"
      ]} ${styles.delete}`;
      buttonText = text ? text : "Delete";
      break;
    case "new":
      iconClass = `${fontStyles.fa} ${fontStyles[
        "fa-plus-circle"
      ]} ${styles.new}`;
      buttonText = text ? text : "New";
      break;
    case "comment":
      buttonText = text ? text : "Comment";
      buttonClass = `${styles.primaryButton}`;
      break;
    case "save":
      buttonText = text ? text : "Save";
      buttonClass = `${styles.primaryButton}`;
      break;
  }

  buttonClass = small
    ? `${buttonClass} ${styles.iconBtn} ${styles.small}`
    : `${buttonClass} ${styles.iconBtn} ${styles.normal}`;

  return (
    <a
      href="#"
      className={buttonClass}
      data-disabled={disabled ? "true" : "false"}
    >
      {iconClass && (
        <i className={iconClass} aria-hidden="true">
          &nbsp;
        </i>
      )}
      {buttonText}
    </a>
  );
};

export default Button;
