import { StepI } from './Step.model';
import { returnIconStep } from './Step.utils';
import styles from './Step.module.scss';
import ParseContent from '@components/Collapse/_component/ParseContent';

export const Step = ({
  type,
  title,
  subtitle,
  urlIcon,
  highlightColor,
}: StepI) => {
  return (
    <div className={styles.step}>
      <div className={styles.step__icon}>
        {returnIconStep({ type, urlIcon, highlightColor })}
      </div>
      <div className={styles.step__text}>
        <h3>{title}</h3>
        {subtitle && <ParseContent content={subtitle} />}
      </div>
    </div>
  );
};

export default Step;
