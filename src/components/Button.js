import React from "react";
import styles from "./Button.css";
import fontStyles from "font-awesome/css/font-awesome.css";
import { Link } from "react-router-dom";

const Button = ({ small, type, link, text, disabled, tagName, ...props }) => {
  let iconClass,
    buttonClass,
    buttonText = "";
  switch (type) {
    case "edit":
      iconClass = `${fontStyles.fa} ${fontStyles[
        "fa-pencil-square"
      ]} ${styles.edit}`;
      buttonText = "Edit";
      break;
    case "view":
      iconClass = `${fontStyles.fa} ${fontStyles["fa-eye"]} ${styles.view}`;
      buttonText = "View";
      break;
    case "delete":
      iconClass = `${fontStyles.fa} ${fontStyles[
        "fa-window-close"
      ]} ${styles.delete}`;
      buttonText = "Delete";
      break;
    case "new":
      iconClass = `${fontStyles.fa} ${fontStyles[
        "fa-plus-circle"
      ]} ${styles.new}`;
      buttonText = "New";
      break;
    case "primary":
      buttonClass = `${styles.primaryButton}`;
      break;
    case "secondary":
      buttonClass = `${styles.secondaryButton}`;
      break;
    default:
      break;
  }

  buttonText = text ? text : buttonText;
  buttonClass = small
    ? `${buttonClass} ${styles.iconBtn} ${styles.small}`
    : `${buttonClass} ${styles.iconBtn} ${styles.normal}`;

  const TagName = link ? Link : "button";

  return (
    <TagName
      to={link}
      className={buttonClass}
      data-disabled={disabled ? "true" : "false"}
      onClick={props.onClick}
      type={props.htmlType}
    >
      {iconClass && (
        <i className={iconClass} aria-hidden="true">
          &nbsp;
        </i>
      )}
      {buttonText}
    </TagName>
  );
};

export default Button;
