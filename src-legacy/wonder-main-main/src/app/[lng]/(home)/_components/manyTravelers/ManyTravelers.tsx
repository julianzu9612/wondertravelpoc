import styles from './ManyTravelers.module.scss';

const ManyTravelers = ({t} : { t: (e: string) => string}) => {
  return (
    <div className={styles['many-travelers']}>
      <h4
        dangerouslySetInnerHTML={{
          __html: t('many-travelers'),
        }}
      />
    </div>
  );
};

export default ManyTravelers;
