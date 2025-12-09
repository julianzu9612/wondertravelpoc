import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@i18n-server';
import dynamic from 'next/dynamic';
import ButtonCurrency from './_components/buttonCurrency/ButtonCurrency';
import ButtonLanguage from './_components/buttonLanguage/ButtonLanguage';
import { getCurrencyCookie } from '../../app/actions';
import { DEFAULT_CURRENCY } from '../../middleware';
import styles from './Navbar.module.scss';

const ShowMenuBurger = dynamic(() => import('./ShowMenuBurger'), {
  ssr: false,
});


const cardsList = [
  {
    travelStyle: 'expediciones-wonder',
    i18n: 'card',
    defaultI18n: 'Expediciones Wonder',
  },
  {
    travelStyle: 'liberacion-de-tortugas',
    i18n: 'card',
    defaultI18n: 'Liberación de tortugas',
  },
  {
    travelStyle: 'salidas-grupales-2025',
    i18n: 'card',
    defaultI18n: 'Salidas grupales 2025',
  },
  {
    travelStyle: 'temporada-ballenas-2025',
    i18n: 'card',
    defaultI18n: 'Temporada de ballenas 2025',
  },
  // {
  //   travelStyle: 'fecha-wonder',
  //   i18n: 'card',
  //   defaultI18n: 'Viajes semana Santa',
  // },
] as { travelStyle: string; i18n: string; defaultI18n: string }[];

const Navbar = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, 'translation');
  const currency = await getCurrencyCookie();
  const basicUrl = `/${lng}/search?`;

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
            src={'/assets/images/WonderLogoDark.svg'}
            width={118}
            height={53}
            alt='logo'
            quality={100}
          />
        </Link>

        <ul className={styles['group-left__menu']}>
          <li>
            <Link
              href={`/${lng}/countries/colombia`}
              data-id='navbar-colombia'
            >
              {t('Destinations')}
            </Link>
          </li>

          <li>
            <Link aria-label={t('Groups', 'Grupos')} href={`/${lng}/groups`}>
              {t('Groups', 'Grupos')}
            </Link>
          </li>
          <li>
            <Link aria-label={t('Corporate', 'Empresas')} href={`/${lng}/corporate`}>
              {t('Corporate', 'Empresas')}
            </Link>
          </li>

          <li>
            <Link aria-label={t('navbar.tailor-made')} href={`/${lng}/tailor`}>
              {t('navbar.tailor-made')}
            </Link>
          </li>
        </ul>

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
                <li>
                  <ButtonLanguage label='Français' value='fr' />
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
              <p>{currency?.toUpperCase() ?? DEFAULT_CURRENCY}</p>
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
      </div>

      <div className={styles['navbar__burger']}>
        <ShowMenuBurger />

        <label htmlFor='menu-toggle' className={styles['burger__icon']}>
          <div className={styles['icon-burger']}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>

        <div className={styles['burger__menu']}>
          <div
            style={{
              display: 'none',
            }}
          >
            <svg xmlns='http://www.w3.org/2000/svg'>
              <symbol viewBox='0 0 24 24' id='expand-more'>
                <path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' />
                <path d='M0 0h24v24H0z' fill='none' />
              </symbol>
            </svg>
          </div>

          <ul>
            <li>
              <Link
                href={`/${lng}/countries/colombia`}
                data-id='navbar-colombia'
              >
                {t('Destinations')}
              </Link>
            </li>

            <li>
              <details className={styles['summary']}>
                <summary>
                  {t('Travel Styles')}
                  <svg
                    className={`${styles['control-icon']} ${styles['control-icon-expand']}`}
                    width='24'
                    height='24'
                    role='presentation'
                  >
                    <use
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      xlinkHref='#expand-more'
                    />
                  </svg>
                </summary>

                {
                  cardsList.map((card, key) => (
                    <Link
                      key={key}
                      href={`/${lng}/search?travelStyles=${card.travelStyle}`}
                    >
                      {t(card.i18n, card.defaultI18n)}
                    </Link>))

                }
              </details>
            </li>

            <li>
              <details className={styles['summary']}>
                <summary>
                  {t('navbar.tripActivities')}
                  <svg
                    className={`${styles['control-icon']} ${styles['control-icon-expand']}`}
                    width='24'
                    height='24'
                    role='presentation'
                  >
                    <use
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      xlinkHref='#expand-more'
                    />
                  </svg>
                </summary>
                <Link href={`${basicUrl}&tags=nature-wildlife`}>
                  🐒 {t('navbar.Nature & wildlife')}{' '}
                </Link>
                <Link href={`${basicUrl}&tags=adventure`}>
                  🚣 {t('navbar.Adventure')}
                </Link>
                <Link href={`${basicUrl}&tags=classic-tours`}>
                  🚌 {t('navbar.Classic tours')}
                </Link>
                <Link href={`${basicUrl}&tags=food-gastronomy`}>
                  🌮 {t('navbar.Food & gastronomy')}
                </Link>
                <Link href={`${basicUrl}&tags=culture-history`}>
                  🎭 {t('navbar.Culture & history')}
                </Link>
                <Link href={`${basicUrl}&tags=beach-sun`}>
                  🏖️ {t('navbar.Beach & sun')}
                </Link>
              </details>
            </li>

            <li>
              <details className={styles['summary']}>
                <summary>
                  {t('navbar.budget')}
                  <svg
                    className={`${styles['control-icon']} ${styles['control-icon-expand']}`}
                    width='24'
                    height='24'
                    role='presentation'
                  >
                    <use
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      xlinkHref='#expand-more'
                    />
                  </svg>
                </summary>
                <Link
                  href={`/${lng}/search?priceMax=${
                    lng === 'en' ? '1000' : '4000000'
                  }`}
                >
                  {t('navbar.1000')}
                </Link>
                <Link
                  href={`/${lng}/search?priceMax=${
                    lng === 'en' ? '2000' : '8000000'
                  }`}
                >
                  {t('navbar.2000')}
                </Link>
                <Link
                  href={`/${lng}/search?priceMin=${
                    lng === 'en' ? '2000' : '8000000'
                  }`}
                >
                  {t('navbar.deluxe')}
                </Link>
              </details>
            </li>
            <li>
              <Link aria-label={t('Contact Us')} href={`/${lng}/tailor`}>
                {t('navbar.tailor-made')}
              </Link>
            </li>
            <li>
              <Link aria-label={t('Groups', 'Grupos')} href={`/${lng}/groups`}>
                {t('Groups', 'Grupos')}
              </Link>
            </li>

            <li>
              <Link aria-label={t('Corporate', 'Empresas')} href={`/${lng}/corporate`}>
                {t('Corporate', 'Empresas')}
              </Link>
            </li>

            <li>
              <Link href={`/${lng}/blog`}>Blog</Link>
            </li>
            <li className={`${styles.navbar__item}}`}>
              <Link
                aria-label={t('About Us')}
                href={`/${lng}/about-us`}
                rel='noreferrer noopener'
              >
                {t('About Us')}
              </Link>
            </li>
            <li className={`${styles.navbar__item}}`}>
              <Link
                aria-label={t('Contact Us')}
                href={`/${lng}/contact-us`}
                rel='noreferrer noopener'
              >
                {t('Contact Us')}
              </Link>
            </li>
          </ul>
        </div>

        <label htmlFor='menu-toggle' className={styles['burger__background']} />
      </div>
    </nav>
  );
};

export default Navbar;
