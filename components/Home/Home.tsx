"use client";

import { useUser } from "@/app/providers/UserContext";
import CreatePostForm from "../CreatePostForm/CreatePostForm";
import CreatePostHeader from "../CreatePostForm/CreatePostHeader/CreatePostHeader";
import Post from "../Post/Post";
import styles from "./Home.module.scss";

const dummyPosts = [
  {
    id: "1",
    username: "user1",
    created_datetime: "2023-01-01T12:00:00Z",
    title: "Dummy Post 1",
    content: "This is the content of the first dummy post.",
  },
  {
    id: "2",
    username: "user2",
    created_datetime: "2023-01-02T12:00:00Z",
    title: "Dummy Post 2",
    content: "This is the content of the second dummy post.",
  },
];

export default function Home() {
  const { username } = useUser();

  const handleCreate = (title: string, content: string) => {
    console.log("Create post:", title, content);
  };

  return (
    <>
      <CreatePostHeader title="CodeLeap Network" />
      <div className={styles.content}>
        <CreatePostForm
          onCreate={handleCreate}
          placeholder="What's on your mind?"
        />
        {dummyPosts.map((post) => (
          <Post
            key={post.id}
            post={post}
            isOwnPost={post.username === username}
            onEdit={() => console.log("Edit post:", post.id)}
            onDelete={() => console.log("Delete post:", post.id)}
          />
        ))}
      </div>
    </>
  );
}
