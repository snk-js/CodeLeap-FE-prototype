"use client";

import React from "react";
import styles from "./PostFormFields.module.scss";

interface PostFormFieldsProps {
  title: string;
  setTitle: (value: string) => void;
  content: string;
  setContent: (value: string) => void;
  titlePlaceholder?: string;
  contentPlaceholder?: string;
}

const PostFormFields: React.FC<PostFormFieldsProps> = ({
  title,
  setTitle,
  content,
  setContent,
  titlePlaceholder = "Hello World",
  contentPlaceholder = "Content here",
}) => {
  return (
    <div className={styles.entries}>
      <div className={styles.entry}>
        <label>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={titlePlaceholder}
        />
      </div>
      <div className={styles.entry}>
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={contentPlaceholder}
        />
      </div>
    </div>
  );
};

export default PostFormFields;
