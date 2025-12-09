export const UseSortTrip = ({
  label,
  price,
}: {
  price?: string;
  label?: string;
}) => {
  const sort: string[] = [];
  if (price) {
    sort.push(price === 'asc' ? 'price' : '-price');
  }
  if (label) {
    sort.push(label === 'asc' ? 'product_label' : '-product_label');
  }
  return sort.toString();
};
