"use client";

import React from "react";
import styles from "./PostDetails.module.scss";

interface PostHeaderProps {
  username: string;
  created_datetime: string | null;
  isOwnPost: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

const PostDetails: React.FC<PostHeaderProps> = ({
  username,
  created_datetime,
  isOwnPost,
  onEdit,
  onDelete,
}) => {
  return (
    <div className={styles.details}>
      <span className={styles.username}>@{username}</span>
      <span className={styles.timestamp}>{created_datetime || "Now"}</span>
      {isOwnPost && (
        <div className={styles.actions}>
          <button onClick={onEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
