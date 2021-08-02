import groq from 'groq';

export const PortfolioListQ = groq`*[_type == "portfolio"] | order(_createdAt asc) [0...20] {
    _id,
    _type,
    _createdAt,
    title,
    slug,
    tags,
    description,
    image,
    publishedAt,
    link,
  } [0...20]`;

export const PortfolioSingleQ = groq`*[slug.current == $slug] [0...1] {
    _id,
    _type,
    _createdAt,
    title,
    slug,
    tags,
    description,
    image,
    publishedAt,
    link,
  }`;
