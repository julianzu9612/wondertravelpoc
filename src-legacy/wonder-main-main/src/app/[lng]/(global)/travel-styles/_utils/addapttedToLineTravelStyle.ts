import { IWonderLineCategory } from '@components/CategoryFilter/CategoryFilter.model';
import { GetTravelStyles } from '@services/trips/travelStyles/getTravelStyles';

const addapttedToLineTravelStyles = async () => {
  const getTravelStyles = await GetTravelStyles();
  const addaptedToLineTravelStyle: IWonderLineCategory[] = getTravelStyles.map(
    ({ label, name, image_url }) => ({
      image: image_url,
      label,
      url: '/travel-styles/' + name,
      name: label,
    })
  );
  return {
    travelStyles: getTravelStyles,
    addaptedToLineTravelStyle,
  };
};

export default addapttedToLineTravelStyles;
