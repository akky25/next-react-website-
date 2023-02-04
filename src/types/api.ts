type Response<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type ResponsePost = Response<Content>;

export type ResponseSlugsAndTitles = Response<SlugAndTitle>;

export type ResponseAllPosts = Response<Post>;

export type ResponseAllCategories = Response<
  Pick<Category, 'id' | 'name' | 'slug'>
>;

export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  slug: string;
};

export type Eyecatch = {
  url: string;
  height: number;
  width: number;
};

export type Content = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  slug: string;
  publishDate: string;
  content: string;
  eyecatch?: Eyecatch;
  categories: Category[];
};

export type SlugAndTitle = {
  title: string;
  slug: string;
};

export type Post = {
  title: string;
  slug: string;
  eyecatch?: Eyecatch;
};
