import groq from 'groq';

export const ProjectsListQ = groq`*[_type == "projects"] | order(publishedAt asc) | order(_createdAt asc) [0...20] {
  _id,
  _createdAt,
  "imageUrl": image.asset->url,
  description,
  link,
  publishedAt,
  slug,
  tags[]->,
  title,
} [0...20]`;

export const ProjectSingleQ = groq`*[slug.current == $slug] [0] {
  _id,
  _createdAt,
  "imageUrl": image.asset->url,
  description,
  link,
  publishedAt,
  slug,
  tags[]->,
  title,
}`;
