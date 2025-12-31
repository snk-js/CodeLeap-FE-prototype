"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ModalOverlay from "../Modal/ModalOverlay";
import ModalBase from "../Modal/ModalBase";
import PostFormFields, {
  PostFormData,
  postSchema,
} from "../PostFormFields/PostFormFields";
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
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: initialTitle,
      content: initialContent,
    },
  });

  const onSubmit = (data: PostFormData) => {
    onSave(data.title, data.content);
  };

  return (
    <ModalOverlay onClose={onCancel}>
      <ModalBase title="Edit Post" onClose={onCancel}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.body}>
            <PostFormFields
              register={register}
              errors={errors}
              titlePlaceholder="Enter title"
              contentPlaceholder="Enter content"
            />
          </div>
          <div className={styles.footer}>
            <button type="button" className={styles.cancel} onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className={styles.save} disabled={!isValid}>
              Save
            </button>
          </div>
        </form>
      </ModalBase>
    </ModalOverlay>
  );
};

export default EditPostModal;
