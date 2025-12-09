import type { itemsGeneralInformation } from '@components/generalInformation/GeneralInformation';
import { carouselImages, IResponseCmsContent, generalInfoI, reviewsResponseI, ICmsContentItineraryResponse } from './formaters.model';


const formatCarousel = (carouselImages: carouselImages[]) =>
  carouselImages.map((images) => images.feed_image_thumbnail.full_url);

export const formatGeneralInfo = (
  generalInfo: generalInfoI[]
): itemsGeneralInformation[] => {
  const output = [];

  for (let i = 0; i < generalInfo.length; i++) {
    const generalInfoData = generalInfo[i];
    const items = [];

    for (let j = 0; j < generalInfoData.info_items.length; j++) {
      const infoItem = generalInfoData.info_items[j];

      items.push(infoItem);
    }

    output.push({
      title: generalInfoData.title,
      items: items,
    });
  }

  return output;
};

const formatReviews = (reviews: reviewsResponseI[]) => {
  if (reviews.length > 0) {
    return reviews.map((comment) => ({
      name: comment.name,
      place: comment.nationality,
      comment: comment.text,
    }));
  } else {
    return [];
  }
};




export function cleanData(responseCmsContent: IResponseCmsContent): ICmsContentItineraryResponse {
  const cleanData = {
    ...responseCmsContent,
    title: responseCmsContent?.title,
    description: responseCmsContent?.description,
    subtitle: responseCmsContent?.subtitle,
    place: responseCmsContent?.location,
    duration: '4 días, 3 noches?',
    price: 1234555,
    coin: 'COP',
    imagesCarousel: formatCarousel(responseCmsContent?.carousel_images),
    reviews: formatReviews(responseCmsContent?.reviews),
    uuidWeTravel: '87401822',
    recomendations: [
      {
        name: 'Paraíso y sabor del Tumaco',
        picture:
          'https://storage.googleapis.com/wonder-334623_test-bucket-core/images/IMG_4170.2e16d0ba.fill-500x500.jpg',
        urlItineray: '/trips/paraiso-y-sabor-del-tumaco-37',
        price: 2_010_000,
      },
      {
        name: 'Amazonas: Tres Fronteras',
        picture:
          'https://storage.googleapis.com/wonder-334623_test-bucket-core/images/1-9.2e16d0ba.fill-500x500.jpg',
        urlItineray: '/trips/amazonas-tres-fronteras-19',
        price: 1_670_000,
      },
      {
        name: 'Aventura Alta Guajira',
        picture:
          'https://storage.googleapis.com/wonder-334623_test-bucket-core/images/Aventura-alta-guajira-wonder-trave.2e16d0ba.fill-500x500.png',
        urlItineray: '/trips/experiencia-alta-guajira-34',
        price: 825_000,
      },
      {
        name: 'Aventura Nuquí',
        picture:
          'https://storage.googleapis.com/wonder-334623_test-bucket-core/images/aterrizando_en_nuqui.2e16d0ba.fill-500x500.jpg',
        urlItineray: '/trips/aventura-en-nuqui-21',
        price: 1_657_000,
      },
      {
        name: 'Explora la magia del Putumayo',
        picture:
          'https://storage.googleapis.com/wonder-334623_test-bucket-core/images/1-5.2e16d0ba.fill-500x500.jpg',
        urlItineray: '/trips/explora-la-magia-del-putumayo-32',
        price: 1_265_000,
      },
    ],
  };

  return cleanData;
}
