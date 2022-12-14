import { createClient } from 'microcms-js-sdk';
import {
  ResponseAllPosts,
  ResponsePost,
  ResponseSlugsAndTitles,
} from '@/types/api';

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN ?? '',
  apiKey: process.env.API_KEY ?? '',
});

export const getPostBySlug = async (slug: string) => {
  try {
    const post = await client.get<ResponsePost>({
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

export const getAllSlugsAndTitles = async (limit = 100) => {
  try {
    const slugsAnsTiles = await client.get<ResponseSlugsAndTitles>({
      endpoint: 'blogs',
      queries: { fields: 'title,slug', orders: '-publishDate', limit },
    });
    return slugsAnsTiles.contents;
  } catch (err) {
    console.log('~~ getAllSlugsAndTitles ~~');
    console.log(err);
    throw err;
  }
};

export async function getAllPosts(limit = 100) {
  try {
    const posts = await client.get<ResponseAllPosts>({
      endpoint: 'blogs',
      queries: {
        fields: 'title,slug,eyecatch',
        orders: '-publishDate',
        limit: limit,
      },
    });
    return posts.contents;
  } catch (err) {
    console.log('~~ getAllPosts ~~');
    console.log(err);
    throw err;
  }
}
