"use client";

import React, { useState } from "react";
import PostFormFields from "../PostFormFields/PostFormFields";
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
      <PostFormFields
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
      />
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
