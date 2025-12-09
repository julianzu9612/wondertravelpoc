import styles from './Navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import ButtonCurrency from '@components/navbarv2/_components/buttonCurrency/ButtonCurrency';
import { getCurrencyCookie } from '../../app/actions';
import ButtonLanguage from '@components/navbarv2/_components/buttonLanguage/ButtonLanguage';

const NavbarEgan = async ({ lng }: { lng: string }) => {
  const currency = await getCurrencyCookie();

  return (
    <nav className={styles['navbar']}>
      <div className={styles['navbar__group-left']}>
        <Link
          aria-label='Go to Home'
          href={`/${lng}/`}
          rel='prev'
          className={styles['group-left__logo']}
          data-id='logo-navbar'
        >
          <Image
            src={'/assets/images/cycla-x-egan/Cycla-x-egan.svg'}
            width={227}
            height={72}
            alt='logo'
            quality={100}
          />
        </Link>
      </div>
      <ul className={styles['group-left__right']}>
        <li>
          <div className={styles['lang-icon']} aria-label='Language'>
            <figure>
              <Image
                src='/assets/icons/lang-icon-blue.svg'
                alt='lang'
                width={48}
                height={48}
                quality={20}
                priority={false}
                loading='lazy'
              />
              <p>{lng}</p>
            </figure>
          </div>

          <div className={styles['submenu']}>
            <ul>
              <li>
                <ButtonLanguage label='Español' value='es' />
              </li>
              <li>
                <ButtonLanguage label='English' value='en' />
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className={styles['currency-icon']} aria-label='currency'>
            <figure>
              <Image
                src='/assets/icons/money-blue.svg'
                alt='money'
                width={23}
                height={48}
                quality={20}
                priority
              />
            </figure>
            <p>{currency?.toUpperCase() ?? 'USD'}</p>
          </div>
          <div className={styles['submenu']}>
            <ul>
              <li>
                <ButtonCurrency currency='COP' />
              </li>
              <li>
                <ButtonCurrency currency='USD' />
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarEgan;
