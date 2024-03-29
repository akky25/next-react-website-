import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import Container from '@/components/container';
import ConvertBody from '@/components/convert-body';
import Meta from '@/components/meta';
import Pagination from '@/components/pagination';
import PostBody from '@/components/post-body';
import PostCategories from '@/components/post-categories';
import PostHeader from '@/components/post-header';
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '@/components/twocolumn';
import { getAllSlugsAndTitles, getPostBySlug } from '@/lib/api';
import { eyecatchLocal } from '@/lib/constants';
import { extractText } from '@/lib/extract-text';
import { prevNextPost } from '@/lib/prev-next-post';
import { Category, Eyecatch, SlugAndTitle } from '@/types/api';

type Props = {
  title: string;
  publish: string;
  content: string;
  eyecatch: Eyecatch & { blurDataURL: string };
  categories: Category[];
  description: string;
  prevPost: SlugAndTitle;
  nextPost: SlugAndTitle;
};

export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost,
}: Props) {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width.toString()}
        pageImgH={eyecatch.height.toString()}
      />
      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />
        <figure>
          <Image
            key={eyecatch.url}
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
            placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}
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
        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allSlugsAndTitles = await getAllSlugsAndTitles();
  return {
    paths: allSlugsAndTitles.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = await getPostBySlug(slug);

  // eyecatch画像が存在しない場合はローカルの代替データを設定
  const eyecatch: Eyecatch = post.eyecatch ?? eyecatchLocal;

  const allSlugsAndTitles = await getAllSlugsAndTitles();
  const [prevPost, nextPost] = prevNextPost(allSlugsAndTitles, slug);

  // プレースホルダのブラー画像を生成(base64)
  const { base64: blurDataURL } = await getPlaiceholder(eyecatch.url);

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: { ...eyecatch, blurDataURL },
      categories: post.categories,
      description: extractText(post.content),
      prevPost: prevPost,
      nextPost: nextPost,
    },
  };
};
