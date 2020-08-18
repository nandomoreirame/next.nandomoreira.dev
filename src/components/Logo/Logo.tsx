import React, { memo } from 'react';
import NextLink from 'next/link';
import { SEO } from '@nandomoreira/@types';
import { SrOnly } from '@nandomoreira/components';

import * as S from './Logo.styles';

type LogoProps = {
  href?: string;
  title?: string;
};

const seo: SEO = (process?.env?.SEO as SEO) || {};

const Logo: React.FC<LogoProps> = ({
  href = '/',
  title = `${seo?.title}${seo?.subtitle}`,
}: LogoProps) => (
  <NextLink href={href} as={href} passHref>
    <S.Logo>
      {title && <SrOnly>{title}</SrOnly>}
      <S.Svg width="50" height="45" fill="none" xmlns="http://www.w3.org/2000/svg">
        {title && <title>{title}</title>}
        <path d="M43.247 0v45H32.662L12.597 21.021V45H0V0h10.584L30.65 23.979V0h12.598z" />
        <rect className="dot" x="37.013" y="32.143" width="12.987" height="12.857" rx="6.429" />
      </S.Svg>
    </S.Logo>
  </NextLink>
);

export default memo(Logo);
