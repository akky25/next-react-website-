import { SlugAndTitle } from '@/types/api';

export function prevNextPost(
  allSlugs: SlugAndTitle[],
  currentSlug: string,
): [SlugAndTitle, SlugAndTitle] {
  // 全記事数
  const numberOfPosts = allSlugs.length;

  // 現在の記事のインデックス
  const currentIndex = allSlugs.findIndex(({ slug }) => slug === currentSlug);

  // 前記事のslug
  const prevPost =
    currentIndex + 1 === numberOfPosts
      ? { title: '', slug: '' }
      : allSlugs[currentIndex + 1];

  // 次記事のslug
  const nextPost =
    currentIndex === 0 ? { title: '', slug: '' } : allSlugs[currentIndex - 1];

  return [prevPost, nextPost];
}
