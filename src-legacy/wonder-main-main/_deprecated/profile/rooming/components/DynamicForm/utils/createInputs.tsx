// import CustomSelect from '../components/CustomSelect/CustomSelect';
import { CustomCheckbox } from '../components/CustomCheckBox/CustomCheckBox';
import { CustomRadio } from '../components/CustomRadio/CustomRadio';
import { CustomInput } from '../components/CustomInput/CustonInput';
import { InputProps } from '../types';
import CustomSelect from '../components/CustomSelect/CustomSelect';

const createInputs = ({ inputs }: { inputs: InputProps[] }) =>
  inputs.map((inputProps, i) => {
    delete inputProps?.value;
    delete inputProps?.typeValue;
    delete inputProps?.validations;

    switch (inputProps.type) {
      case 'select':
        return <CustomSelect {...inputProps} key={i} />;
      case 'checkbox':
        return <CustomCheckbox {...inputProps} key={i} />;
      case 'radio':
        return <CustomRadio {...inputProps} key={i} />;
      default:
        return <CustomInput {...inputProps} key={i} />;
    }
  });

export default createInputs;
