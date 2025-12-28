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
  const footer = (
    <>
      <button className="bg-[var(--baseBackground)]" onClick={onCancel}>
        Cancel
      </button>
      <button className="bg-[#FF5151] font-bold" onClick={onConfirm}>
        Delete
      </button>
    </>
  );

  return (
    <ModalOverlay onClose={onCancel}>
      <ModalBase
        title="Are you sure you want to delete this item?"
        onClose={onCancel}
        footer={footer}
      />
    </ModalOverlay>
  );
};

export default DeleteConfirmModal;
