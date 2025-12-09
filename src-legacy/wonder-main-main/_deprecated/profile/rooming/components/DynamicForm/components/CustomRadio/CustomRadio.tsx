import { useFormContext } from 'react-hook-form';
import { CustomInputProps } from '../../types';
import styles from './CustomRadio.module.scss';

export const CustomRadio = ({ name, options, ...props }: CustomInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className={`${errors[name] && styles['error']} ${styles['custom-radio']}`}
    >
      {options &&
        options.map(({ desc, value }) => (
          <label
            key={value}
            className='flex items-center gap-1 cursor-pointer hover:underline rounded p-1'
          >
            <input {...register(name)} {...props} value={value} type='radio' />
            {desc}
          </label>
        ))}
    </div>
  );
};
