import { BlockContent } from './block-content';
import { Image } from './image';
import { Slug } from './slug';

export interface Portfolio {
  _id: string;
  _createdAt: string;
  publishedAt?: string;
  content?: Array<BlockContent>;
  description: string;
  link?: string;
  image?: Image;
  imageUrl?: string;
  slug: Slug;
  tags?: Array<string>;
  title: string;
}
