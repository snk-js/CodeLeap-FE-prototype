"use client";

import React, { useState } from "react";
import styles from "./CreatePostFrom.module.scss";

interface CreatePostFormProps {
  onCreate: (title: string, content: string) => void;
  placeholder: string;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({
  onCreate,
  placeholder,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) return;
    onCreate(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div className={styles.form}>
      <h2>{placeholder}</h2>
      <div className={styles.entries}>
        <div className={styles.entrie}>
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={"Hello World"}
          />
        </div>
        <div className={styles.entrie}>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content here"
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        disabled={!title.trim() || !content.trim()}
      >
        Create
      </button>
    </div>
  );
};

export default CreatePostForm;
