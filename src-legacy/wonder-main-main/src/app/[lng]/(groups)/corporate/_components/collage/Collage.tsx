import Image from 'next/image';
import style from './Collage.module.scss';

import { TFunction } from 'i18next';

interface CollageProps {
  t?: TFunction;
  isUniversity?: boolean;
}

const Collage = ({ isUniversity }: CollageProps) => {
  return (
    <div className={style['collage']}>
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div
          key={i}
          className={`${style[`collage__wrapper-${i}`]} ${
            style['collage__wrapper']
          }`}
        >
          <Image
            src={`/assets/images/${
              !isUniversity
                ? 'groupsLanding/' + i + '-2.jpg'
                : 'corporate/image-' + i + '.jpeg'
            }`}
            fill
            alt=''
          />
        </div>
      ))}
    </div>
  );
};

export default Collage;
