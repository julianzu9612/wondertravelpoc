import dayjs from 'dayjs';

const getMonthShortName = (month:number) => {
  const date = new Date();
  date.setMonth(month);
  return date.toLocaleString('en-US', { month: 'short' });
};


export const CalendarFormat = (start: string, end:string) => {
  const startDate = dayjs(start);
  const endDate = dayjs(end);
  const startDateDay = startDate.date();
  const endDateDay = endDate.date();
  const endDateMonth = endDate.month();
  const endDateYear = endDate.year();
  
  
  return `${startDateDay} - ${endDateDay} ${getMonthShortName(endDateMonth)} ${endDateYear}`;
};

