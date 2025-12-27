import styles from "./CreatePostHeader.module.scss";

type CreatePostHeaderProps = {
  title: string;
};

const CreatePostHeader = ({ title }: CreatePostHeaderProps) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
  );
};

export default CreatePostHeader;
