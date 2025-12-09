import styles from './Detail.module.scss';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';
const Popup = dynamic(() => import('@components/Popup/Popup'), { ssr: false });
interface items {
  text: string | ReactNode;
  icon?: string;
  contentPopup?: string;
}
interface IDetail {
  title: string;
  icon: string;
  alt?: string;
  items?: items[] | items;
}
const Detail = ({ icon, title, items, alt }: IDetail) => {
  if (!items || (Array.isArray(items) && items.length === 0)) {
    return <></>;
  }
  return (
    <div className={styles.detail}>
      {Array.isArray(items) ? (
        <>
          <div className={styles['detail__title-list']}>
            <Image
              className={styles['title-list__img']}
              src={icon}
              alt={alt ?? ''}
              width={12}
              height={12}
            />
            <h2 className={styles['title-list__text']}>{title}</h2>
          </div>
          <ul className={styles['detail__list']}>
            {items.map(({ text, contentPopup, icon }, i) => {
              if (contentPopup) {
                return (
                  <li key={i}>
                    <Popup title={text} content={contentPopup} icon={icon} />
                  </li>
                );
              }
              return <li key={i}>{text}</li>;
            })}
          </ul>
        </>
      ) : (
        <>
          <div className={styles.detail__title}>
            <Image
              className={styles.title__img}
              src={icon}
              alt={alt ?? ''}
              width={15}
              height={15}
            />
            <h2 className={styles.title__text}>{title}</h2>
          </div>
          {items.contentPopup ? (
            <Popup
              title={items.text}
              content={items.contentPopup}
              icon={items.icon}
            />
          ) : (
            <p>{items.text}</p>
          )}
        </>
      )}
    </div>
  );
};
export default Detail;
