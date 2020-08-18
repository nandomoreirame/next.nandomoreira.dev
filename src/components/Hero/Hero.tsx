import React, { memo } from 'react';
import * as s from './Hero.styles';

type HeroProps = {
  children: React.ReactNode;
  centered?: boolean;
};

const Hero: React.FC<HeroProps> = ({ children, centered = false }: HeroProps) => (
  <s.Hero>
    <s.HeroInner className={centered ? '--centered' : ''}>{children}</s.HeroInner>
  </s.Hero>
);

export default memo(Hero);
