import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Nothing found{" "}
      </h1>
      <p className={styles.description}>Sorry, this page is not available in our online store</p>
    </div>
  );
};
export default NotFoundBlock;
