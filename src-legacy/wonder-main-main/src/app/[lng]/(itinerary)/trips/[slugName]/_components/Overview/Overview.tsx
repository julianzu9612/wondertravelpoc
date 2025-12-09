import dynamic from 'next/dynamic';
import { IOverview } from './Overview.model';
import styles from './overview.module.scss';
const TextHtml = dynamic(() => import('../TextHtml/TextHtml'), { ssr: false });
const Overview = ({ description, details, cardPrice }: IOverview) => {
  return (
    <div className={styles.overview} id='overview'>
      <div className={styles.overview__description}>
        <div className={styles.description__description}>
          <TextHtml
            description={description}
            className={styles.description__description}
          />
        </div>
        {details}
      </div>
      <div className={styles.overview__price}>{cardPrice}</div>
    </div>
  );
};

export default Overview;
