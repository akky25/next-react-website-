export type Response = {
  contents: Content[];
  totalCount: number;
  offset: number;
  limit: number;
};

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
