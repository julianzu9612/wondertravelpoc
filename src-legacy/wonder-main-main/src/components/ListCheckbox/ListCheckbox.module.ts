export interface inputRadio extends React.ComponentProps<'input'> {
  label: string;
  value: string;
  checked?: boolean;
}

export interface IListCheckBox {
  listCheck: inputRadio[];
  name: string;
  onChange?: (value: string, checked: boolean) => void;
}
