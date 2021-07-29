import * as React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';

export interface SEOProps extends Pick<NextSeoProps, 'title' | 'description'> {}

export const SEO = ({ title, description }: SEOProps) => (
  <NextSeo
    title={title}
    description={description}
    openGraph={{ title, description }}
    titleTemplate={'%s - Fernando Moreira'}
  />
);
