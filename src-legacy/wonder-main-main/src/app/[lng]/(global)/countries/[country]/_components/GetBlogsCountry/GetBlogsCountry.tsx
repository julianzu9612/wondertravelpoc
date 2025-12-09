import { ApiResponse } from '@services/blog/getPostsBlog';
import styles from './GetBlogsCountry.module.scss';
import TargetBlog from './TargetBlog';
const GetBlogsCountry = async (blog: ApiResponse) => {
  return (
    <div className={styles['getBlogsCountry']}>
      {blog.results.map((post, i) => (
        <TargetBlog {...post} key={i} />
      ))}
    </div>
  );
};

export default GetBlogsCountry;
