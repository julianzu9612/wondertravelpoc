import { getPostsBlogs } from '@services/blog/getPostsBlog';
import styles from './page.module.scss';
// components
import Footer from '@components/footerV2/Footer';
import { useTranslation } from '@i18n-server';
import CardPost from './_components/cardPost/CardPost';
import Subscribe from './_components/subscribe/Subscribe';
// import ModalPromotion from './_components/modalPromotion/ModalPromotion';
interface HomeProps {
  params: { lng: string };
}
export async function generateMetadata({ params: { lng } }: HomeProps) {
  const { t } = await useTranslation(lng, 'metaTags');
  const trans = (value: string) =>
    t('metaTagBlog.' + value, { defaultValue: value });
  const title = trans('Wonder Stories Your Travel Companion');
  const description = trans(
    'Wonder Stories brings the world to your fingertips with inspiring travel narratives and advice Dive in!'
  );
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

export default async function Home({ params: { lng } }: HomeProps) {
  const postsBlogs = await getPostsBlogs({ lng });
  const { t } = await useTranslation(lng, 'blog');

  if (postsBlogs.count < 1) return <p>empty state</p>;

  return (
    <>
      <main className={styles['blog']}>
        <h1 className={styles['blog__title']}>{t('Wonder Stories')}</h1>
        <hr className={styles['blog__line-title']} />
        <p className={styles['blog__subtitle']}>{t('subtitle')}</p>
        <div className={styles['blog__post-list']}>
          {postsBlogs?.results.map((post, i) => (
            <CardPost
              className={styles['post-list__card']}
              key={i}
              {...post}
              lng={lng}
            />
          ))}
        </div>
        <Subscribe lng={lng} />
      </main>
      <Footer lng={lng} />
    </>
  );
}
