"use client";

import React, { useState } from "react";
import ModalOverlay from "../Modal/ModalOverlay";
import ModalBase from "../Modal/ModalBase";
import PostFormFields from "../PostFormFields/PostFormFields";
import styles from "./EditPostModal.module.scss";

interface EditPostModalProps {
  initialTitle: string;
  initialContent: string;
  onSave: (title: string, content: string) => void;
  onCancel: () => void;
}

const EditPostModal: React.FC<EditPostModalProps> = ({
  initialTitle,
  initialContent,
  onSave,
  onCancel,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    if (!title.trim() || !content.trim()) return;
    onSave(title, content);
  };

  return (
    <ModalOverlay onClose={onCancel}>
      <ModalBase title="Edit Post" onClose={onCancel}>
        <div className={styles.body}>
          <PostFormFields
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            titlePlaceholder="Enter title"
            contentPlaceholder="Enter content"
          />
        </div>
        <div className={styles.footer}>
          <button className={styles.cancel} onClick={onCancel}>
            Cancel
          </button>
          <button
            className={styles.save}
            onClick={handleSave}
            disabled={!title.trim() || !content.trim()}
          >
            Save
          </button>
        </div>
      </ModalBase>
    </ModalOverlay>
  );
};

export default EditPostModal;
