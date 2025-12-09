import styles from './Rating.module.scss';
const Rating = ({ scores = 0 }: { scores?: number }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className={styles.rating}>
      {stars.map((rating, i) => {
        const isMoreThanRating = rating > scores;
        const porcentDecimal = (+scores.toString().split('.')[1] * 100) / 10;
        const styleRating =
          scores === 0 ? 'rating__star' : 'rating__star--static';

        return (
          <div
            key={i}
            className={`${styles.rating__star} ${
              !!!scores || !isMoreThanRating
                ? styles[`${styleRating}--active`]
                : styles[`${styleRating}--disabled`]
            }`}
            style={{
              background:
                scores && rating >= scores
                  ? `linear-gradient(90deg, #ff6549 ${porcentDecimal}%, #c0bfc2 ${porcentDecimal}%)`
                  : '',
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Rating;
