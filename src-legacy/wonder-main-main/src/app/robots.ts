import { MetadataRoute } from 'next';
 
export default function robots(): MetadataRoute.Robots {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  return {
    rules: {
      userAgent: '*',
      disallow: [],
    },
    sitemap: `${domain}/sitemap.xml`,

  };
}