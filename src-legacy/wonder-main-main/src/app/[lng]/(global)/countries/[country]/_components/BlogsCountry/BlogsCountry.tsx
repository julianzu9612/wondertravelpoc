import styles from './BlogsCountry.module.scss';
import { useTranslation } from '@i18n-server';
import TitleCountry from '../TitleCountry/TitleCountry';
import Link from 'next/link';
import GetBlogsCountry from '../GetBlogsCountry/GetBlogsCountry';
import { getPostsBlogs } from '@services/blog/getPostsBlog';

interface IBlogsCountry {
  countryName: string;
  lng: string;
  countryLabel: string;
  countryCode: string;
}
const BlogsCountry = async ({
  lng,
  countryLabel,
  countryCode,
}: IBlogsCountry) => {
  const dataBlogs = await getPostsBlogs({
    limit: 4,
    country: countryCode,
  });
  if (dataBlogs.results.length === 0) {
    return <></>;
  } else {
    const { t } = await useTranslation(lng, 'countries');
    const title = t('blogsAboutCountry.Blogs About country', {
      country: countryLabel,
    });
    const readMore = t('blogsAboutCountry.Read more');
    const linkBlog = `/${lng}/blog`;

    return (
      <section className={styles['BlogsCountry']}>
        <TitleCountry title={title} />
        <GetBlogsCountry {...dataBlogs} />
        <Link
          className={`button ${styles['BlogsCountry__seeMore']}`}
          href={linkBlog}
        >
          {readMore}
        </Link>
      </section>
    );
  }
};

export default BlogsCountry;
