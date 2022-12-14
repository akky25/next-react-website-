import { GetStaticProps } from 'next';
import { getPlaiceholder } from 'plaiceholder';
import Container from '@/components/container';
import Hero from '@/components/hero';
import Meta from '@/components/meta';
import Posts from '@/components/posts';
import { getAllPosts } from '@/lib/api';
import { eyecatchLocal } from '@/lib/constants';
import { PostForProps } from '@/types/common';

type Props = {
  posts: PostForProps[];
};

export default function Blog({ posts }: Props) {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
      <Hero title="Blog" subtitle="Recent Posts" />
      <Posts posts={posts} />
    </Container>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const postsAddedBlurDataURL: PostForProps[] = [];

  const posts = await getAllPosts();
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
      posts: postsAddedBlurDataURL,
    },
  };
};
