"use client";

import React, { useState } from "react";
import ModalOverlay from "../Modal/ModalOverlay";
import ModalBase from "../Modal/ModalBase";

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
        <div>
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <button onClick={onCancel}>Cancel</button>
          <button
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
