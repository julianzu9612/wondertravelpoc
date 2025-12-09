import Image from 'next/image';
//import styles
import styles from './Highlighted.module.scss';
import { useTranslation } from '@i18n-server';
import useGetLanguaje from '@hooks/useGetLanguaje';
interface IHighlighted {
  items: string[];
}
const Highlighted = async ({ items }: IHighlighted) => {

  const lng = useGetLanguaje() + '';
  if (items.length === 0) {
    return <></>;
  }
  const { t } = await useTranslation(lng, 'itinerary');
  
  return (
    <div className={styles.highlighted}>
      <div className={styles.highlighted__title}>
        <Image
          src={'/assets/icons/Warranty.png'}
          width={15}
          height={20}
          alt=''
        />
        <h3>
          {t('details.Highlighted activities', {
            defaultValue: 'Highlighted activities',
          })}
        </h3>
      </div>
      <ul className={styles.highlighted__list}>
        {typeof items === 'string' ? <li>{items}</li> : items.map((text, i) => {
          return <li key={i}>{text}</li>;
        })}
      </ul>
    </div>
  );
};

export default Highlighted;
