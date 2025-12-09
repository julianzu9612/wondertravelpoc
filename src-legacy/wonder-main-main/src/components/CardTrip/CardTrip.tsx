import type { ICardTrip } from './CardTrip.model';
import CardTripIsCategories from './_components/CardTripCategories/CardTripIsCategories';

const CardTrip = (props: ICardTrip) => {
  return (
    <CardTripIsCategories {...props} />
  );
};

export default CardTrip;
