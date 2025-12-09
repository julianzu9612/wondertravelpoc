import styles from './TitleCountry.module.scss';
const TitleCountry = ({ title }: { title: string }) => {
  return (
    <div className={styles.title}>
      <h2>{title}</h2>
    </div>
  );
};

export default TitleCountry;
