import { ICheckBox } from './CheckBox.model';
import styles from './CheckBox.module.scss';
const CheckBox = ({ action, checked, label, value }: ICheckBox) => {
  return (
    <label className={styles['form-check']}>
      <input
        type='checkbox'
        checked={checked}
        className='form-check-input-false'
        value={value}
        name={label}
        onChange={(e) => {
          action(e);
        }}
      />
      {label}
    </label>
  );
};

export default CheckBox;
