import { ResGetCountry } from '../../../../../../../../statics/countries';
import styles from './BasicCountry.module.scss';
import DetailCountry from './DetailCountry/DetailCountry';

const BasicCountry = ({
  capital,
  currency,
  indicativePhone,
  language,
  population,
  timezone,
  voltage,
}: ResGetCountry['informationBasic']) => {
  return (
    <section className={styles.basicCountry}>
      <div className={styles['basicCountry__details']}>
        <DetailCountry
          description={indicativePhone}
          img='\assets\icons\countries\Phone.svg'
          title='Indicative'
        />
        <DetailCountry
          description={capital}
          img='/assets/icons/countries/City.svg'
          title='Capital City'
        />
        <DetailCountry
          description={timezone}
          img='/assets/icons/countries/Timezone.svg'
          title='Time Zone'
        />
        <DetailCountry
          description={currency}
          img='/assets/icons/countries/Bank.svg'
          title='Currency'
        />
        <DetailCountry
          description={language}
          img='/assets/icons/countries/Vector.svg'
          title='Language'
        />
        <DetailCountry
          description={voltage}
          img='/assets/icons/countries/Plug.svg'
          title='Voltage'
        />
        <DetailCountry
          description={population}
          img='/assets/icons/countries/Vector.svg'
          title='Population'
        />
      </div>
    </section>
  );
};

export default BasicCountry;
