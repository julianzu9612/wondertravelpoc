import Link from 'next/link';
import styles from './Notfound.module.scss';
import useGetLanguaje from '@hooks/useGetLanguaje';

export default async function NotFound() {
  const lng = useGetLanguaje();
  return (
    <div className={styles['not-found']}>
      <h2>Not Found</h2>
      <p>Could not find trip </p>
      <Link href={`/${lng}/`}>
        <button> Return Home</button>
      </Link>
    </div>
  );
}
