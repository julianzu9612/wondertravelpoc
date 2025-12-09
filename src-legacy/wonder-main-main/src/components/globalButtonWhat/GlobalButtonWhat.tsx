import RedirectIcon from '@components/footerV2/_components/RedirectIcon';
import styles from './GlobalButtonWhat.module.scss';
import { whatsappUrl } from '../../constants';

const GlobalButtonWhat = () => {
  return (
    <div className={styles['button-w']}>
      <RedirectIcon
        aria-label='whatsapp'
        href={whatsappUrl('¡Hola wonder 🖖🏼! tengo un par de dudas con: ', true)}
        img='/assets/icons/whatsapp.svg'
        alt='whatsapp'
      />
    </div>
  );
};

export default GlobalButtonWhat;
