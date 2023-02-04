import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { getPlaiceholder } from 'plaiceholder';
import Container from '@/components/container';
import Hero from '@/components/hero';
import Meta from '@/components/meta';
import Pagination from '@/components/pagination';
import Posts from '@/components/posts';
import { getAllPosts } from '@/lib/api';
import { eyecatchLocal } from '@/lib/constants';
import { PostForProps } from '@/types/common';

// type Props = {
//   posts: PostForProps[];
// };

type Tmp = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Tmp> = ({ posts }) => {
  return (
    <Container>
      <Meta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More Posts" />
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{
  posts: PostForProps[];
}> = async () => {
  const postsAddedBlurDataURL: PostForProps[] = [];

  const posts = await getAllPosts(4);
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
