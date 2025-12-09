import styles from './Loading.module.scss';
const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__loading}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <span>Loading</span>
    </div>
  );
};

export default Loading;
