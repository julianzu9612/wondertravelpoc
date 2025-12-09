export interface IResponseGetIdWithSlugName {
  items: 
    {
      id: number;
      title: string;
    }[];
}

export interface feedImageThumbnail {
  url: string;
  full_url: string;
}

export interface carouselImages {
  feed_image_thumbnail: feedImageThumbnail;
}

export interface generalInfoI {
  title: string;
  info_items: string[];
}

export interface reviewsResponseI {
  text: string;
  name: string;
  nationality: string;
}

export interface IResponseCmsContent {
  title: string;
  description: string;
  subtitle: string;
  location: string;
  carousel_images: carouselImages[];
  curious_fact: string;
  general_info: generalInfoI[];
  reviews: reviewsResponseI[];
}


export interface ICmsContentItineraryResponse {
  title: string;
  carousel_images: carouselImages[];
  general_info: generalInfoI[];
  reviews: { name: string; place: string; comment: string }[];
  subtitle: string;
  place: string;
  duration: string;
  price: number;
  coin: string;
  imagesCarousel: string[];
  uuidWeTravel: string;
  recomendations: { name: string; picture: string; urlItineray: string; price: number; }[];
}
