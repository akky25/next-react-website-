import { createClient } from 'microcms-js-sdk';
import { Response } from '@/types/api';

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN ?? '',
  apiKey: process.env.API_KEY ?? '',
});

export const getPostBySlug = async (slug: string) => {
  try {
    const post = await client.get<Response>({
      endpoint: 'blogs',
      queries: { filters: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (err) {
    console.log('-- getPostBySlug');
    console.log(err);
    throw err;
  }
};
