import { Post, Eyecatch } from './api';
import { ConvertPropType } from './utils';

// APIレスポンスのPostの型をConvertPropTypeで以下の通り変換したものの配列型
// ・eyecatchを必須に
// ・eyecatchの型にblurDataURLプロパティを追加
export type PostForProps = ConvertPropType<
  Required<Post>,
  'eyecatch',
  Eyecatch & { blurDataURL: string }
>;
