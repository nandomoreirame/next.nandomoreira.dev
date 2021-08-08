import { Slug } from './slug';

export interface Tag {
  _id: string;
  _rev: string;
  _type: string;
  _createdAt: string;
  slug: Slug;
  title: string;
}
