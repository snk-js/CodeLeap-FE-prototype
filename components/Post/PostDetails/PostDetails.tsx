"use client";

import React from "react";
import styles from "./PostDetails.module.scss";
import { timeAgo } from "@/app/utils/dates";

interface PostHeaderProps {
  username: string;
  created_datetime: string | null;
}

const PostDetails: React.FC<PostHeaderProps> = ({
  username,
  created_datetime,
}) => {
  return (
    <div className={styles.details}>
      <span className={styles.username}>@{username}</span>
      <span className={styles.timestamp}>{timeAgo(created_datetime)}</span>
    </div>
  );
};

export default PostDetails;
