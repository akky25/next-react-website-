type ResponseCommonProps = {
  totalCount: number;
  offset: number;
  limit: number;
};

export type ResponsePost = {
  contents: Content[];
} & ResponseCommonProps;

export type ResponseSlugsAndTitles = {
  contents: SlugsAndTitles[];
} & ResponseCommonProps;

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

export type SlugsAndTitles = {
  title: string;
  slug: string;
};
