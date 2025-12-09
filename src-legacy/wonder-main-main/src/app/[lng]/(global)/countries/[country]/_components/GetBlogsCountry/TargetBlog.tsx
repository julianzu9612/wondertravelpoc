import { IResult } from '@services/blog/getPostsBlog';
import styles from './GetBlogsCountry.module.scss';
import Image from 'next/image';
import dayjs from 'dayjs';
import Link from 'next/link';

const TargetBlog = ({
  image_url,
  title,
  created_at,
  seo_description,
  id,
  lang,
}: IResult) => {
  const dateFormat = dayjs(created_at).format('MMMM DD, YYYY');
  const linkBlog = `/${lang.toLowerCase()}/blog/${id}`;
  return (
    <Link className={styles['targetBlog']} href={linkBlog}>
      <Image
        className={styles['targetBlog__image']}
        alt={`image of ${title}`}
        src={image_url}
        width={200}
        height={200}
        style={{ objectFit: 'cover' }}
      />
      <div className={styles['targetBlog__content']}>
        <div className={styles['content__info']}>
          <h2 className={styles['info__title']}>{title}</h2>
          <p className={styles['info__description']}>{seo_description}</p>
        </div>
        <p className={styles['content__date']}>{dateFormat}</p>
      </div>
    </Link>
  );
};

export default TargetBlog;
