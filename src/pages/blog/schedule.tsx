import { GetStaticProps } from 'next';
import Image from 'next/image';
import Container from '@/components/container';
import ConvertBody from '@/components/convert-body';
import PostBody from '@/components/post-body';
import PostCategories from '@/components/post-categories';
import PostHeader from '@/components/post-header';
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '@/components/twocolumn';
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
        <figure>
          <Image
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
          />
        </figure>
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
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
