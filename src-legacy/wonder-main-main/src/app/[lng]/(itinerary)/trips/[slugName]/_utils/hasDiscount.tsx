export const HasDiscount = ({
  price,
  price_discount,
}: {
  price_discount: string;
  price: string;
}) => {
  const valueParseNumber = (value: string) => {
    // separate integer and decimal
    //delete separate for miles
    const [valueInteger] = value.split('.');
    //parse number
    return +valueInteger.replaceAll(',', '');
  };
  //compare between price and discounted price
  const hasDiscount =
    valueParseNumber(price_discount) < valueParseNumber(price);
  return hasDiscount;
};
