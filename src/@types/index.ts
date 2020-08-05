import React from 'react';

export type withDarkModeActiveProps = Partial<React.HTMLAttributes<HTMLElement>> & {
  readonly darkModeActive: boolean;
};

export type FigureProps = withDarkModeActiveProps & {
  readonly size: number;
};

export type ImageProps = Partial<React.HTMLAttributes<HTMLImageElement>> & withDarkModeActiveProps;

export type SEOType = {
  readonly description?: string;
  readonly favicon?: string;
  readonly image?: string;
  readonly ogImage?: string;
  readonly themeColor?: string;
  readonly title?: string;
  readonly url?: string;
};
