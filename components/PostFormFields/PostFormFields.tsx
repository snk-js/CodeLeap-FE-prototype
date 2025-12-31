"use client";

import React from "react";
import { z } from "zod";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import styles from "./PostFormFields.module.scss";
import { postSchema } from "./validation";

export type PostFormData = z.infer<typeof postSchema>;

interface PostFormFieldsProps {
  register: UseFormRegister<PostFormData>;
  errors: FieldErrors<PostFormData>;
  titlePlaceholder?: string;
  contentPlaceholder?: string;
}

const PostFormFields: React.FC<PostFormFieldsProps> = ({
  register,
  errors,
  titlePlaceholder = "Hello World",
  contentPlaceholder = "Content here",
}) => {
  return (
    <div className={styles.entries}>
      <div className={styles.entry}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          placeholder={titlePlaceholder}
          {...register("title")}
          aria-invalid={!!errors.title}
          aria-describedby={errors.title ? "title-error" : undefined}
        />
        {errors.title && (
          <span id="title-error" role="alert" className={styles.error}>
            {errors.title.message}
          </span>
        )}
      </div>
      <div className={styles.entry}>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          placeholder={contentPlaceholder}
          {...register("content")}
          aria-invalid={!!errors.content}
          aria-describedby={errors.content ? "content-error" : undefined}
        />
        {errors.content && (
          <span id="content-error" role="alert" className={styles.error}>
            {errors.content.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default PostFormFields;
export { postSchema };
