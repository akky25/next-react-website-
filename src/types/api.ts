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
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  categories: Category[];
};
