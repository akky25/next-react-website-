import { GetStaticPaths, GetStaticProps } from 'next';
import Container from '@/components/container';
import PostHeader from '@/components/post-header';
import { getAllCategories } from '@/lib/api';

export default function Category({ name }: { name: string }) {
  return (
    <Container>
      <PostHeader title={name} subtitle="Blog Category" />
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

export const getStaticProps: GetStaticProps<{ name: string }> = async ({
  params,
}) => {
  const catSlug = params?.slug as string;
  const allCats = await getAllCategories();
  const cat = allCats.find(({ slug }) => slug === catSlug);
  return {
    props: {
      name: cat?.name ?? '',
    },
  };
};
