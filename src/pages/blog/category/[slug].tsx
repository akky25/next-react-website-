import { GetStaticPaths, GetStaticProps } from 'next';
import { getPlaiceholder } from 'plaiceholder';
import Container from '@/components/container';
import Meta from '@/components/meta';
import PostHeader from '@/components/post-header';
import Posts from '@/components/posts';
import { getAllCategories, getAllPostsByCategory } from '@/lib/api';
import { eyecatchLocal } from '@/lib/constants';
import { PostForProps } from '@/types/common';

type Props = {
  name: string;
  posts: PostForProps[];
};

export default function Category({ name, posts }: Props) {
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name} に関する記事 `} />
      <PostHeader title={name} subtitle="Blog Category" />
      <Posts posts={posts} />
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allCats = await getAllCategories();
  return {
    // paths: ['/blog/category/technology'],
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const postsAddedBlurDataURL: PostForProps[] = [];

  const catSlug = params?.slug as string;
  const allCats = await getAllCategories();

  const cat = allCats.find(({ slug }) => slug === catSlug);

  const posts = await getAllPostsByCategory(cat?.id ?? '');

  for (const post of posts) {
    const eyecatch = post.eyecatch ?? eyecatchLocal;
    const { base64 } = await getPlaiceholder(eyecatch.url);
    postsAddedBlurDataURL.push({
      ...post,
      eyecatch: {
        ...eyecatch,
        blurDataURL: base64,
      },
    });
  }

  return {
    props: {
      name: cat?.name ?? '',
      posts: postsAddedBlurDataURL,
    },
  };
};
