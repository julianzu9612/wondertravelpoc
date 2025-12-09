import { IListCheckBox } from './ListCheckbox.module';
import styles from './ListCheckbox.module.scss';
import CheckBox from '@components/CheckBox/CheckBox';

const ListCheckbox = ({ listCheck, onChange }: IListCheckBox) => {
  return (
    <div className={styles['list-check']}>
      {listCheck.map(({ label, value, checked }, i) => {
        return (
          <CheckBox
            action={({ target: { checked } }) => {
              if (value) onChange?.(value, checked);
            }}
            label={label}
            checked={checked || false}
            key={i}
            value={value?.toString()}
          />
        );
      })}
    </div>
  );
};
export default ListCheckbox;
