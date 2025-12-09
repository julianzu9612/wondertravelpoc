export const convertToCent = (total: string): string => {
  if (total.length < 0) return '';
  return total.replace(/,/g, '') + '00';
};

export const convertToNumber = (total: string): number => {
  if (total.length < 0) return 0;
  return Number(total.replace(/,/g, ''));
};
