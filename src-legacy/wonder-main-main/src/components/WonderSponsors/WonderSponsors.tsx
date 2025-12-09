// styles
import styles from './WonderSponsors.module.scss';
// types
import { IWonderSponsors } from './WonderSponsors.model';
import Image from 'next/image';

const WonderSponsors = ({ wonderSponsors, t }: IWonderSponsors) => (
  <div className={styles['wonder-sponsors']}>
    <section className='wonder-grid'>
      <h2>{t('Our Allies')}</h2>
      <section className={styles['wonder-sponsors__items']}>
        {wonderSponsors.map((wonderSponsor, index: number) => (
          <figure key={index}>
            <Image
              src={wonderSponsor.image}
              alt=''
              width={260}
              height={133}
              quality={60}
              loading='lazy'
            />
          </figure>
        ))}
      </section>
    </section>
  </div>
);

export default WonderSponsors;
