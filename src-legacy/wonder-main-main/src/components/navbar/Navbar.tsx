'use client';
//constants
import { whatsappUrl } from '../../constants';
//utils
import { useState, useEffect, useMemo } from 'react';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { getCookie, setCookie } from 'cookies-next';
import { useParams, usePathname, useRouter } from 'next/navigation';
//model
import { ItemContent } from '@components/DropdownRedirect/Dropdown.model';
//hooks
import { useTranslation } from '@i18n-client';

//components
import dynamic from 'next/dynamic';
import { GetTravelStyles } from '@services/trips/travelStyles/getTravelStyles';
import { UseAddaptedCountries } from '../../app/[lng]/(global)/_utilities/useAddaptedCountriesTrips';
import { getCurrencyCookieClient } from '@utils/getCurrencyClient';
const Dropdown = dynamic(() => import('@components/Dropdown/Dropdown'), {
  ssr: false,
});
// import Dropdown from '@components/Dropdown/Dropdown';

const DropdownRedirect = dynamic(
  () => import('@components/DropdownRedirect/DropdownRedirect'),
  { ssr: false }
);
const Collapse = dynamic(() => import('@components/Collapse/Collapse'), {
  ssr: false,
});

enum CURRENCY {
  COP = 'COP',
  USD = 'USD',
}
const productsInCop = ['taco-trail-120'];

const Navbar = ({
  type = 'DarkContrast',
  variant,
  hasBanner,
}: {
  type?: 'DarkContrast' | 'Dark';
  variant?: 'sticky';
  hasBanner?: boolean;
}) => {
  const route = usePathname();
  const { push, refresh } = useRouter();
  const currencyCookie = getCurrencyCookieClient();
  const langCookie = getCookie('i18next');
  const { lng, slugName } = useParams<{ lng: string; slugName: string }>();
  useEffect(() => {
    const includeCop = productsInCop.includes(slugName);
    if (!currencyCookie && !includeCop) {
      changeCurrency(CURRENCY.USD);
    } else if (includeCop) {
      changeCurrency(CURRENCY.COP);
    }
  }, [slugName]);
  useEffect(() => {
    if (langCookie !== lng) {
      changeLanguage(lng);
    }
  }, []);
  const [showMenu, toggleShowMenu] = useState(false);
  const [currencyMenu, toggleCurrencyMenu] = useState(false);
  const [tags, setTags] = useState<ItemContent[]>([]);
  const [countries, setCountries] = useState<ItemContent[]>([]);
  const { t } = useTranslation(lng, 'translation');
  const changeCurrency = (currency: string) => {
    setCookie('currency', currency, { maxAge: 60 * 6 * 24 });
    refresh();
  };

  const onChangeCurrency = (currency: string) => {
    changeCurrency(currency);
  };
  const changeLanguage = (value: string) => {
    const routeSplit = route.split('/');
    routeSplit[1] = value;
    const routeChangeParam = routeSplit.join('/');
    setCookie('i18next', value, { maxAge: 60 * 6 * 24 });
    push(routeChangeParam);
  };

  useEffect(() => {
    const getData = async () => {
      const travelStyle = await GetTravelStyles();
      const { countriesService } = await UseAddaptedCountries({ lng });

      const travelStyleItems = travelStyle.map(
        (tag): ItemContent => ({
          redirect: `/${lng}/travel-styles/${tag.name}`,
          titleOption: tag.label,
        })
      );

      const countriesTranslate: ItemContent[] = countriesService.map(
        ({ name, label }) => ({
          redirect: `/${lng}/countries/${name}`,
          titleOption: label || name,
        })
      );
      setCountries(countriesTranslate);
      setTags(travelStyleItems);
    };
    getData();
  }, []);
  const memoItemsCollapse = useMemo(
    () => [
      {
        title: <li>{t('Destinations')}</li>,
        content: (
          <ul className={styles.submenu}>
            {countries.map(({ redirect, titleOption }, i) => (
              <li key={i} className={styles.submenu__option}>
                <Link href={redirect}>{titleOption}</Link>
              </li>
            ))}
            <li className={styles.submenu__option}>
              <Link href={`/${lng}/trips`}>
                <b>{t('viewAll')}</b>
              </Link>
            </li>
          </ul>
        ),
      },
      {
        title: <li>{t('Travel Styles')}</li>,
        content: (
          <ul className={styles.submenu}>
            {tags.map(({ redirect, titleOption }, i) => (
              <li key={i} className={styles.submenu__option}>
                <Link href={redirect}>{titleOption}</Link>
              </li>
            ))}
            <li className={styles.submenu__option}>
              <Link href={`/${lng}/travel-styles/`}>
                <b>{t('viewAll')}</b>
              </Link>
            </li>
          </ul>
        ),
      },
    ],
    [countries, tags, lng]
  );
  return (
    <>
      <header
        className={`${styles['main-header']} ${styles[type]} ${
          styles[variant ? `main-header--${variant}` : '']
        } ${hasBanner ? styles['main-header--banner'] : ''} `}
      >
        <nav className={styles.navbar}>
          <Link
            aria-label='Go to Home'
            href={`/${lng}/`}
            rel='prev'
            className={styles['navbar__logo']}
          >
            <Image
              src={`/assets/images/wonderLogo${type}.svg`}
              width={118}
              height={63}
              alt='logo'
              quality={100}
            />
          </Link>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>
              <DropdownRedirect
                title={t('Destinations')}
                content={countries}
                redirect={`/${lng}/trips`}
              />
            </li>

            <li className={styles.navbar__item}>
              <DropdownRedirect
                title={t('Travel Styles')}
                content={tags.slice(0, 8)}
                redirect={`/${lng}/travel-styles/`}
              />
            </li>
            <li className={styles.navbar__item}>
              <Link
                aria-label={t('Deals')}
                href={`/${lng}/categories/travel-deals`}
              >
                {t('Deals')}
              </Link>
            </li>
            {/* <li className={styles.navbar__item}>
              <Link aria-label={t('Calendar')} href={lng + '/calendar'}>
                {t('Calendar')}
              </Link>
            </li> */}
          </ul>
          <ul className={styles['navbar__icons-group']}>
            <Dropdown
              value={lng}
              title={
                <span className={styles['lang-icon']} aria-label='Language'>
                  <figure>
                    <Image
                      src='/assets/icons/lang-icon.svg'
                      alt='lang'
                      width={48}
                      height={48}
                      quality={20}
                      priority={false}
                      loading='lazy'
                    />
                    <span>{lng}</span>
                  </figure>
                </span>
              }
              event={changeLanguage}
              options={[
                { label: t('Spanish'), value: 'es' },
                { label: t('English'), value: 'en' },
              ]}
            />
            <Dropdown
              value={currencyCookie + ''}
              title={
                <div
                  className={styles['currency-icon__menu-btn']}
                  onClick={() => toggleCurrencyMenu((prev) => !prev)}
                >
                  <Image
                    src='/assets/icons/money.svg'
                    alt='money'
                    width={23}
                    height={48}
                    quality={20}
                    priority
                  />
                  <p>{currencyCookie}</p>
                  <Image
                    className={`${
                      currencyMenu ? styles['active'] : styles['deactive']
                    } ${styles['arrow']}`}
                    src='/assets/icons/arrow-down.svg'
                    alt=''
                    width={48}
                    height={48}
                    quality={20}
                    priority={false}
                    loading='lazy'
                  />
                </div>
              }
              event={onChangeCurrency}
              options={[
                { label: CURRENCY.COP, value: CURRENCY.COP },
                { label: CURRENCY.USD, value: CURRENCY.USD },
              ]}
            />
            {process.env.NODE_ENV === 'development' && (
              <li className={`${styles.navbar__item} ${styles['login-link']}`}>
                <Link
                  href={`/${lng}/profile`}
                  aria-label='Log In'
                  rel='noreferrer'
                >
                  <figure>
                    <Image
                      src='/assets/icons/login.svg'
                      alt=''
                      width={22}
                      height={22}
                      priority={false}
                      loading='lazy'
                    />
                  </figure>
                  <span>{t('LogIn', { defaultValue: 'Profile' })}</span>
                </Link>
              </li>
            )}
            <li className={`${styles.navbar__item} ${styles.menu}`}>
              <button
                aria-label='Open Menu'
                onClick={() => toggleShowMenu((prev) => !prev)}
                className={`${styles.button__toggleMenu} ${styles.ghost} ghost`}
                name='mobile-icon'
              >
                <Image
                  src='/assets/icons/menu-white-icon.svg'
                  alt=''
                  width={42}
                  height={42}
                  loading='lazy'
                  priority={false}
                  quality={50}
                />
              </button>
            </li>
          </ul>
          <div
            className={`${styles['hamburger-menu']} ${
              showMenu ? styles['show-menu'] : ''
            }`}
          >
            <button
              className={`${styles['button__toggle-menu']} ghost`}
              name='close-icon'
              onClick={() => toggleShowMenu((prev) => !prev)}
              aria-label='close-menu'
            >
              <Image
                src='/assets/icons/close.svg'
                alt=''
                width={42}
                height={28}
                priority={false}
                loading='lazy'
                quality={30}
              />
            </button>
            <ul className={styles['navbar__item-hamburguer']}>
              <Collapse
                acordion
                items={memoItemsCollapse}
                withoutBorder
                lng={lng}
              />
              <li>
                <Link
                  aria-label={t('Deals')}
                  href={`/${lng}/categories/travel-deals`}
                >
                  {t('Deals')}
                </Link>
              </li>
              {/* <li>
                <Link aria-label={t('Calendar')} href={lng + '/calendar'}>
                  {t('Calendar')}
                </Link>
              </li> */}
              {process.env.NODE_ENV === 'development' && (
                <>
                  {/* <li>
                    <Link aria-label={t('Calendar')} href={`/${lng}/calendar`}>
                      {t('Calendar')}
                    </Link>
                  </li> */}
                  <li>
                    <Link aria-label={t('My Profile')} href={`/${lng}/profile`}>
                      {t('My Profile')}
                    </Link>
                  </li>
                </>
              )}
              <li className={`${styles.navbar__item} ${styles.whatsapp}`}>
                <Link
                  aria-label={t('Whatsapp')}
                  href={whatsappUrl('¡Hola wonder! ando buscando un poco de ayuda con mi proceso', true)}
                  rel='noreferrer'
                  target='_blank'
                >
                  {t('Whatsapp')}
                </Link>
              </li>
              <li className={`${styles.navbar__item}}`}>
                <Link
                  aria-label={t('About Us')}
                  href='https://pages.wondertravel.co/about-us'
                  rel='noreferrer noopener'
                  target='_blank'
                >
                  {t('About Us')}
                </Link>
              </li>
              <li className={`${styles.navbar__item}}`}>
                <Link
                  aria-label={t('Contact Us')}
                  href='https://pages.wondertravel.co/contact'
                  rel='noreferrer noopener'
                  target='_blank'
                >
                  {t('Contact Us')}
                </Link>
              </li>
              {process.env.NODE_ENV === 'development' && (
                <li className={`${styles.navbar__item}`}>
                  <Link
                    aria-label={t('Experiential Travel News')}
                    href={`/${lng}/experiential-travel-news`}
                  >
                    {t('Experiential Travel News')}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
