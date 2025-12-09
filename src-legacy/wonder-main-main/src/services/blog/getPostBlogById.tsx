import 'server-only';

import { API_ENDPOINTS } from '@services/endpoints';
import { connect } from '@services/connect';

const BLOG_POSTS = API_ENDPOINTS.BLOG_POSTS;
interface Tag {
  name: string;
  label: string;
  image_url: string;
}

interface Country {
  name: string;
  label: string;
  iso_code: string;
  image_url: string;
}

export interface IBlogPost {
  id: number;
  title: string;
  image_url: string;
  body: string;
  seo_description: string;
  tags: Tag[];
  countries: Country[];
  created_at: string;
}


export async function getPostBlogById({
  lng,
  id
}: {
  lng: string;
  id: string;
}): Promise<IBlogPost | null> {

  try {
    const { data } = await connect.get<IBlogPost>(`${BLOG_POSTS}/${id}`, {
      headers: { lang: lng.toUpperCase() }
    });
    return data;
    
  } catch (error) {
    return null;
  }

}
