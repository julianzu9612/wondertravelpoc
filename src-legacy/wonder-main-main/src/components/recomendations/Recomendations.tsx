// styles
import styles from './Recomendations.module.scss';
//types
import { RecomendationsI } from './Recomendations.model';
//services
//utils
import { getArrayItemRandom } from '../../utils';
//components
import { useTranslation } from '@i18n-server';
import GridTrips from '@components/GridTrips/GridTrips';
import { getTripsData } from '@services/getTripsData';

const Recomendations = async ({ lng, t, query, tags }: RecomendationsI) => {
  const randomItem = getArrayItemRandom(tags);
  const tag = randomItem ? randomItem?.name : query;

  const response = await getTripsData({
    queryParams: { tags: tag },
    lang: lng,
  });

  if (!response || !response.results) {
    return <div>No results found.</div>;
  }
  const { results } = response; 
  
  const { t: trans } = await useTranslation(lng);
  return (
    <div className={styles.recomendations}>
      <h2 className={styles['recomendations__title']}>
        {t('Recomendations.More Adventures For You')}
      </h2>
      <div className={styles['recomendations__list']}>
        {results && <GridTrips tripsData={results} t={trans} lng={lng} />}
      </div>
    </div>
  );
};

export default Recomendations;
