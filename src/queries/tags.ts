import groq from 'groq';

export const TagsListQ = groq`*[_type == "tags"] | order(publishedAt asc) | order(_createdAt asc) [0...20] {
  _id,
  _createdAt,
  slug,
  title,
} [0...20]`;

export const TagSingleQ = groq`*[slug.current == $slug] [0] {
  _id,
  _createdAt,
  slug,
  title,
}`;
