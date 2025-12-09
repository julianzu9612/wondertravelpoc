import Modal from '@components/Modal/Modal';
import { IModalImage } from './ModalImage.model';
import styles from './ModalImage.module.scss';
import Image from 'next/image';

const ModalImage = ({ onClose, open, alt, image }: IModalImage) => {
  return (
    <Modal open={open}>
      <div className={styles['modal-image']}>
        <Image
          onClick={onClose}
          className={styles['modal-image__close']}
          src={'/assets/icons/close.svg'}
          width={30}
          height={30}
          alt={'full view'}
          loading='lazy'
          priority={false}
        />
        <div className={styles['modal-image__image-container']}>
          <Image
            src={image}
            className={styles['image-container__image']}
            fill
            alt={alt}
            loading='lazy'
            priority={false}
            quality={100}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ModalImage;
