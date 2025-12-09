import { useTranslation } from '@i18n-server';
import { getPostBlogById } from '@services/blog/getPostBlogById';
import Image from 'next/image';
import styles from './page.module.scss';
import Link from 'next/link';
import dayjs from 'dayjs';
import Subscribe from '../_components/subscribe/Subscribe';

const PostBlogPage = async ({
  params: { lng, id },
}: {
  params: { id: string; lng: string };
}) => {
  const { t } = await useTranslation(lng);
  const data = await getPostBlogById({ id, lng });

  if (data === null) return <div>no data</div>;

  const { title, body, image_url, created_at } = data;

  return (
    <div className={styles['post-blog']}>
      <Image
        className={styles['post-blog__image']}
        src={image_url}
        width={760}
        height={427}
        alt={title}
        sizes='(100vw, 100vh)'
      />

      <div className={styles['post-blog__return-btn']}>
        <Link className='secondary' href={`/${lng}/blog`} scroll={false}>
          {t('Return')}
        </Link>
      </div>

      <p className={styles['post-blog__date']}>
        {dayjs(created_at).format('MMMM DD, YYYY')}
      </p>
      <h1 className={styles['post-blog__title']}>{title}</h1>

      {body?.length > 0 && (
        <div
          className={styles['post-blog__body']}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      )}

      <div className={styles['post-blog__suscribe']}>
        <Subscribe lng={lng} />
      </div>
    </div>
  );
};

export default PostBlogPage;
