import Image from 'next/image';
import styles from './page.module.scss';
import ChatWithUs from './_components/ChatWithUs/ChatWithUs';
import FrequentlyQuestions from './_components/FrequentlyQuestions/FrequentlyQuestions';
import FormLookingFor from './_components/FormLookingFor/FormLookingFor';
import { useTranslation } from '@i18n-server';
import { IContact } from './page.model';
export async function generateMetadata({ params: { lng } }: IContact) {
  const { t } = await useTranslation(lng, 'metaTags');
  const trans = (value: string) =>
    t('metaTagContactUs.' + value, { defaultValue: value });
  const title = trans('Contact Us | Wonder Travel');
  const description = trans('Contact us__description');
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ['https://cdn.wondertravel.co/seo/main.png'],
    },
  };
}
const ContactUs = async ({ params: { lng } }: IContact) => {
  const { t } = await useTranslation(lng, 'contact');
  return (
    <div className={styles.contact}>
      <section className={`${styles.contact__banner} mask-dark-gradient`}>
        <Image
          src={'/assets/images/contactUs/contactUsBkg.jpeg'}
          alt='contact us'
          fill
          style={{ objectFit: 'cover', zIndex: -1 }}
        />
        <h1 className={styles.banner__title}>{t('Contact Us')}</h1>
        <p className={styles.banner__description}>{t('description')}</p>
      </section>
      <section className={styles.contact__content}>
        <section className={styles.content__form}>
          <ChatWithUs lng={lng} />
          <FormLookingFor lng={lng} />
        </section>
        <FrequentlyQuestions lng={lng} />
      </section>
    </div>
  );
};

export default ContactUs;
