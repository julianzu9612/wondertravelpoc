import 'server-only';

import { API_ENDPOINTS } from '@services/endpoints';
import { connect } from '@services/connect';

const BLOG_POSTS = API_ENDPOINTS.BLOG_POSTS;

// Tag Interface
interface Tag {
  name: string;
  label: string;
  image_url: string;
}

// Country Interface
interface Country {
  name: string;
  label: string;
  iso_code: string;
  image_url: string;
}

// Result Interface
export interface IResult {
  id: number;
  title: string;
  image_url: string;
  lang: string;
  seo_description: string;
  tags: Tag[];
  countries: Country[];
  created_at: string;
}

// Response Interface
export interface ApiResponse {
  count: number;
  next: null | string;
  previous: null | string;
  results: IResult[];
}

export async function getPostsBlogs({
  lng,
  limit = 50,
  country,
}: {
  lng?: string;
  limit?: number;
  country?: string;
}): Promise<ApiResponse> {
  const countries = country ? `countries=${country}` : '';
  const { data } = await connect.get<ApiResponse>(
    `${BLOG_POSTS}/?${countries}&limit=${limit}`,
    {
      headers: { lang: lng?.toUpperCase() },
    }
  );

  return data;
}
