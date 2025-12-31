"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PostFormFields, {
  PostFormData,
  postSchema,
} from "../PostFormFields/PostFormFields";
import styles from "./CreatePostFrom.module.scss";

interface CreatePostFormProps {
  onCreate: (title: string, content: string) => void;
  placeholder: string;
}

const CreatePostForm: React.FC<CreatePostFormProps> = ({
  onCreate,
  placeholder,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = (data: PostFormData) => {
    onCreate(data.title, data.content);
    reset();
  };

  return (
    <div className={styles.form}>
      <h2>{placeholder}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PostFormFields register={register} errors={errors} />
        <button type="submit" disabled={!isValid}>
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;
