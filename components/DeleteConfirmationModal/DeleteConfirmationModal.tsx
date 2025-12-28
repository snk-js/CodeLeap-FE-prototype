"use client";

import React from "react";
import ModalOverlay from "../Modal/ModalOverlay";
import ModalBase from "../Modal/ModalBase";

interface DeleteConfirmModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <ModalOverlay onClose={onCancel}>
      <ModalBase title="Confirm Deletion" onClose={onCancel}>
        <p>Are you sure you want to delete this post?</p>
      </ModalBase>
      <div>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm}>Delete</button>
      </div>
    </ModalOverlay>
  );
};

export default DeleteConfirmModal;
