import Image from 'next/image';
import styles from './Popup.module.scss';
import { IPopup } from './Popup.model';
import dynamic from 'next/dynamic';
const TextHtml = dynamic(
  () =>
    import(
      '../../app/[lng]/(itinerary)/trips/[slugName]/_components/TextHtml/TextHtml'
    ),
  { ssr: false }
);
const Popup = ({ title, content, icon }: IPopup) => {
  let contentList = '';
  content.split('-').forEach((item) => {
    if (item) {
      contentList += `<li>${item}</li>`;
    }
  });
  return (
    <button className={styles.popup}>
      {title}
      <Image
        src={icon || '/assets/icons/warning.svg'}
        alt='icon Popup'
        width={16}
        height={16}
        className={styles.popup__icon}
      />
      <div className={styles.popup__content}>
        <ul>
          <TextHtml description={contentList} />
        </ul>
      </div>
    </button>
  );
};

export default Popup;
