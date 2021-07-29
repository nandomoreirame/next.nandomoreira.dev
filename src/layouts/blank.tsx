import * as React from 'react';
import { SEO } from '@components';

type BlankLayoutProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};

export const BlankLayout: React.FC<BlankLayoutProps> = ({ children, ...seo }: BlankLayoutProps) => {
  return (
    <React.Fragment>
      <SEO {...seo} />
      {children}
    </React.Fragment>
  );
};
