export default function formatNumberCreditCard(string16Digits: string) {
  string16Digits = string16Digits.replace(/\s/g, '');

  const groups = [];

  for (let i = 0; i < string16Digits.length; i += 4) {
    groups.push(string16Digits.substr(i, 4));
  }
  
  const result = groups.join(' ');
  
  return result;
}
