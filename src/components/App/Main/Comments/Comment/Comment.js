import React from "react";
import PropTypes from "prop-types";
import UserPicture from "../UserPicture/UserPicture";
import styles from "./Comment.module.css";

const Comment = ({ text, color }) => (
  <li className={styles.comment}>
    <div className={styles.commentContainer}>
      <UserPicture color={color} />
      <span className={styles.commentText}>{text}</span>
    </div>
  </li>
);

Comment.propTypes = {
  text: PropTypes.string
};

export default Comment;
