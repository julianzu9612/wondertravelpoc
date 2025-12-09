import Image from 'next/image';
import style from './Collage.module.scss';

const Collage = () => {
  return (
    <div className={style['collage']}>
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div
          key={i}
          className={`${style[`collage__wrapper-${i}`]} ${
            style['collage__wrapper']
          }`}
        >
          <Image src={`/assets/images/groupsLanding/${i}-2.jpg`} fill alt='' />
        </div>
      ))}
    </div>
  );
};

export default Collage;
