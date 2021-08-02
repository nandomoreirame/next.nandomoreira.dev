export interface Slug {
  _type: string;
  current: string;
}

export interface Image {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface BlockContent {
  style: string;
  _key: string;
  _type: string;
  children: Array<any>;
  markDefs: Array<any>;
}

export interface Portfolio {
  _id: string;
  _createdAt: string;
  _type: string;
  description?: Array<BlockContent>;
  link?: string;
  image?: Image;
  slug: Slug;
  tags?: Array<string>;
  title: string;
}
