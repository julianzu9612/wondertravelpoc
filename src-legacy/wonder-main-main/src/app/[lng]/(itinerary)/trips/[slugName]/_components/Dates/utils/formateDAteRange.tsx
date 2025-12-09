import dayjs from 'dayjs';
import 'dayjs/locale/es';
import 'dayjs/locale/en';

const formatDateRange = (initialDate: string, endDate: string, lng: string) => {
  dayjs.locale(lng);

  const formatDate = (date: string) => dayjs(date).format('ddd, DD MMM / YY');

  const formattedInitialDate = formatDate(initialDate);
  const formattedEndDate = formatDate(endDate);

  return `${formattedInitialDate} - ${formattedEndDate}`;
};

export default formatDateRange;


export const formatSingleDateRange = (initialDate: string, lng: string) => {
  if (!initialDate ) return ;

  dayjs.locale(lng);

  const formatDate = (date: string) => dayjs(date).format('dd DD MMM YY');

  const formattedInitialDate = formatDate(initialDate);  

  return formattedInitialDate;
};

export const duePaymentDate = (date: string, lng: string) => {
  if (!date) return;

  dayjs.locale(lng);

  return dayjs(date).subtract(15, 'day').format('ddd DD MMM YYYY');
};

