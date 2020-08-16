import { HTMLAttributes } from 'react';

export type SEO = {
  readonly description?: string;
  readonly favicon?: string;
  readonly image?: string;
  readonly ogImage?: string;
  readonly themeColor?: string;
  readonly title?: string;
  readonly url?: string;
};

export type FigureProps = Partial<HTMLAttributes<HTMLElement>> & {
  readonly width?: number;
  readonly height?: number;
};

export type ImageProps = Partial<HTMLAttributes<HTMLImageElement>> & {
  readonly width?: number;
  readonly height?: number;
};

export type SocialLink = {
  readonly title: string;
  readonly link: string;
  readonly icon: JSX.Element;
};
