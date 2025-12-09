import { IContentInput } from './ContentInput.model';
import styles from './ContentInput.module.scss';
const ContentInput = ({ children, title }: IContentInput) => {
  return (
    <div className={styles['container-input']}>
      <legend>{title}</legend>
      <div className={styles['container-input__content']}>{children}</div>
    </div>
  );
};

export default ContentInput;
