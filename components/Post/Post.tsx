import React from "react";
import styles from "./Post.module.scss";
import PostHeader from "./PostHeader/PostHeader";
import PostDetails from "./PostDetails/PostDetails";

interface PostProps {
  post: {
    id: number;
    username: string;
    created_datetime: string | null;
    title: string;
    content: string;
  };
  isOwnPost: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

const Post: React.FC<PostProps> = ({ post, isOwnPost, onEdit, onDelete }) => {
  return (
    <div className={styles.post}>
      <PostHeader
        title={post.title}
        isOwnPost={isOwnPost}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <PostDetails
        username={post.username}
        created_datetime={post.created_datetime}
      />
      <p className="break-words">{post.content}</p>
    </div>
  );
};

export default Post;
