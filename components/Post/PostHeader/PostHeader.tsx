import { FunctionComponent } from "react";
import styles from "./PostHeader.module.scss";

interface PostHeaderProps {
  title: string;
  isOwnPost: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

const PostHeader: FunctionComponent<PostHeaderProps> = ({
  title,
  isOwnPost,
  onEdit,
  onDelete,
}) => {
  return (
    <div className={styles.postHeader}>
      <h2>{title}</h2>
      {isOwnPost && (
        <div className={styles.actions}>
          <button onClick={onEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default PostHeader;
