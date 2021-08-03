import groq from 'groq';

export const PortfolioListQ = groq`*[_type == "portfolio"] | order(publishedAt asc) | order(_createdAt asc) [0...20] {
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

export const PortfolioSingleQ = groq`*[slug.current == $slug] [0] {
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
