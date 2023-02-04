import { createClient } from 'microcms-js-sdk';
import {
  ResponseAllCategories,
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

export async function getAllCategories(limit = 100) {
  try {
    const categories = await client.get<ResponseAllCategories>({
      endpoint: 'categories',
      queries: {
        fields: 'name,id,slug',
        limit: limit,
      },
    });
    return categories.contents;
  } catch (err) {
    console.log('~~ getAllCategories ~~');
    console.log(err);
    throw err;
  }
}

export async function getAllPostsByCategory(catID: string, limit = 100) {
  try {
    const posts = await client.get<ResponseAllPosts>({
      endpoint: 'blogs',
      queries: {
        filters: `categories[contains]${catID}`,
        fields: 'title,slug,eyecatch',
        orders: '-publishDate',
        limit: limit,
      },
    });
    return posts.contents;
  } catch (err) {
    console.log('~~ getAllPostsByCategory ~~');
    console.log(err);
    throw err;
  }
}
