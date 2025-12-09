export const splitCardNumber = (input: string | undefined) => {
  if (!input) return '';

  input = input.replace(/\D/g, '');

  const formattedInput = input.replace(/(.{4})/g, '$1 ').trim();
  return formattedInput;
};
