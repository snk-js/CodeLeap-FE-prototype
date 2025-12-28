import { FunctionComponent } from "react";
import styles from "./PostHeader.module.scss";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

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
          <button onClick={onDelete}>
            <MdDeleteForever />
          </button>
          <button onClick={onEdit}>
            <FaRegEdit />
          </button>
        </div>
      )}
    </div>
  );
};

export default PostHeader;
