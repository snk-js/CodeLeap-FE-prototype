"use client";

import { useUser } from "@/app/providers/UserContext";
import CreatePostForm from "../CreatePostForm/CreatePostForm";
import CreatePostHeader from "../CreatePostForm/CreatePostHeader/CreatePostHeader";
import Post from "../Post/Post";
import styles from "./Home.module.scss";
import {
  useCreatePost,
  useDeletePost,
  usePosts,
  useUpdatePost,
} from "@/app/hooks/post";
import { useState } from "react";
import { Post as IPost } from "@/app/api/types";
import DeleteConfirmModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import EditPostModal from "../EditPostModal/EditPostModal";

export default function Home() {
  const { username } = useUser();

  const { data: posts = [], isLoading, error } = usePosts();
  const { mutate: create } = useCreatePost();
  const { mutate: update } = useUpdatePost();
  const { mutate: remove } = useDeletePost();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<IPost | null>(null);

  const handleCreate = (title: string, content: string) =>
    create({ username, title, content });

  const handleEdit = (post: IPost) => {
    setSelectedPost(post);
    setShowEditModal(true);
  };

  const handleDelete = (post: IPost) => {
    setSelectedPost(post);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedPost) remove(selectedPost.id);
    setShowDeleteModal(false);
  };

  const saveEdit = (title: string, content: string) => {
    if (selectedPost)
      update({ id: selectedPost.id, updated: { title, content } });
    setShowEditModal(false);
  };

  return (
    <>
      <CreatePostHeader title="CodeLeap Network" />
      <div className={styles.content}>
        <CreatePostForm
          onCreate={handleCreate}
          placeholder="What's on your mind?"
        />
        {isLoading && <p>Loading...</p>}
        {error && (
          <p className="text-red-500">Error: {(error as Error).message}</p>
        )}
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            isOwnPost={post.username === username}
            onEdit={() => handleEdit(post)}
            onDelete={() => handleDelete(post)}
          />
        ))}
      </div>
      {showDeleteModal && (
        <DeleteConfirmModal
          onConfirm={confirmDelete}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
      {showEditModal && selectedPost && (
        <EditPostModal
          initialTitle={selectedPost.title}
          initialContent={selectedPost.content}
          onSave={saveEdit}
          onCancel={() => setShowEditModal(false)}
        />
      )}
    </>
  );
}
