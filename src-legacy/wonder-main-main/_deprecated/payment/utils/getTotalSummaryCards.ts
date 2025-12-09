const getTotalSummaryCard = (totalUsers: { total: number, type: string, totalCost: number }[]) : string => {
  const totalCard = totalUsers.reduce(
    (accum, currentValue) => accum + currentValue.totalCost,
    0
  );
  return `${totalCard}`;
};

export default getTotalSummaryCard;
