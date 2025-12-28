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
    created_datetime: "25 minutes ago",
    title: "Dummy Post 1",
    content:
      "Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. \n\n Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.",
  },
  {
    id: "2",
    username: "user2",
    created_datetime: "45 minutes ago",
    title: "Dummy Post 2",
    content:
      "Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. \n\n Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.",
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
