import { State } from '../types.model';
import ContentReservation from './components/contentReservation/ContentReservation';
import styles from './SearchReservation.module.scss';
const SearchReservation = ({ state, lng }: { state: State; lng: string }) => {
  return (
    <div className={styles['search-reservation']}>
      <ContentReservation lng={lng} queryState={state} />
    </div>
  );
};

export default SearchReservation;
