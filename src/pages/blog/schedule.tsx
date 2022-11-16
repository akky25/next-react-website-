import { GetStaticProps } from 'next';
import Container from '@/components/container';
import PostHeader from '@/components/post-header';
import { getPostBySlug } from '@/lib/api';
import { Content } from '@/types/api';

type Props = {
  title: string;
  publish: string;
  content: string;
  eyecatch: Content['eyecatch'];
  categories: Content['categories'];
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
      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />
      </article>
    </Container>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  // export const getStaticProps: GetStaticProps = async () => {
  const slug = 'schedule';
  const post = await getPostBySlug(slug);

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  };
};
