import { IResult } from '@services/blog/getPostsBlog';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './CardPost.module.scss';
import dayjs from 'dayjs';

interface ICardPost extends IResult {
  lng: string;
  className: string;
}

const CardPost = ({
  id,
  title,
  seo_description: seoDescription,
  image_url: imageUrl,
  tags,
  lng,
  created_at,
  className,
}: ICardPost) => {
  const date = dayjs(created_at).format('MMMM DD, YYYY');

  
  return (
    <Link className={`${styles['card-post__cta']} ${className}`} href={`/${lng}/blog/${id}`}>
      <article className={styles['card-post']}>
        <Image
          className={styles['card-post__image']}
          src={imageUrl}
          width={807}
          height={505}
          alt={title}
        />
        <h2 className={styles['card-post__title']}>{title}</h2>
        <hr className={styles['card-post__line']} />
        <p className={styles['card-post__subtitle']}>{seoDescription}</p>
        <p className={styles['card-post__date']}>{date}</p>
        <div className={styles['card-post__tags']}>
          {tags.slice(0, 2).map((tag, i) => (
            <p key={i}>{tag.label}</p>
          ))}
        </div>

        <hr className={styles['card-post__line-end']} />
      </article>
    </Link>
  );
};

export default CardPost;
