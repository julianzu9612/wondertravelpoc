import { connect } from './connect';
import { API_ENDPOINTS } from './endpoints';

interface Meta {
  type: string;
  detail_url: string;
  html_url: string;
  slug: string;
  show_in_menus: boolean;
  seo_title: string;
  search_description: string;
  first_published_at: string;
  alias_of: null | unknown;
  parent: {
    id: number;
    meta: {
      type: string;
      detail_url: string;
      html_url: string;
    };
    title: string;
  };
}

interface ImageMeta {
  type: string;
}

interface Image {
  id: number;
  meta: ImageMeta;
}

interface FeedImageThumbnail {
  url: string;
  full_url: string;
  width: number;
  height: number;
  alt: string;
}

interface BlogImage {
  id: number;
  meta: {
    type: string;
  };
  image: Image;
  feed_image_thumbnail: FeedImageThumbnail;
}

interface BlogData {
  id: number;
  meta: Meta;
  title: string;
  body: string;
  images: BlogImage[];
}

const CMS = API_ENDPOINTS.CMS;

export default async function getDetailUrlById(
  id: number,
  lng: string
): Promise<BlogData> {
  try {
    const { data } = await connect.get<BlogData>(`${CMS}/pages/${id}`, {
      headers: { lang: lng.toUpperCase() },
    });

    return data;
  } catch (error) {
    console.error('Error al obtener los datos del blog:', error);
    throw error;
  }
}
