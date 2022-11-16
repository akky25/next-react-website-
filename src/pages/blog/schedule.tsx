import { GetStaticProps } from 'next';
import Container from '@/components/container';
import { getPostBySlug } from '@/lib/api';
import { Content } from '@/types/api';

type Props = {
  title: string | undefined;
  publish: string | undefined;
  content: string | undefined;
  eyecatch: Content['eyecatch'] | undefined;
  categories: Content['categories'] | undefined;
};

export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  categories,
}: Props) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  // export const getStaticProps: GetStaticProps = async () => {
  const slug = 'schedule';
  const post = await getPostBySlug(slug);

  return {
    props: {
      title: post?.title,
      // title: 1000,
      publish: post?.publishDate,
      content: post?.content,
      eyecatch: post?.eyecatch,
      categories: post?.categories,
    },
  };
};
