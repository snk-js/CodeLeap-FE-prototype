import { FunctionComponent } from "react";
import styles from "./PostHeader.module.scss";

interface PostHeaderProps {
  title: string;
}

const PostHeader: FunctionComponent<PostHeaderProps> = ({ title }) => {
  return (
    <div className={styles.postHeader}>
      <h2>{title}</h2>
    </div>
  );
};

export default PostHeader;
