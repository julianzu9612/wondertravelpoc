'use server';
export const formatMoney = (value: string | number) => {
  const [integer] = value.toString().split('.');
  return integer.replaceAll(',', '.');
  // return (
  //   value
  //     .replace(/\D/g, '')
  //     //.replace(/([0-9])([0-9]{2})$/, "$1,$2") // dec
  //     .replace(/([0-9])$/, '$1')
  //     .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, '.')
  // );
};
