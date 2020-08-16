import React, { memo } from 'react';
import * as s from './Hero.styles';

type HeroProps = {
  children: React.ReactNode;
};

const Hero: React.FC<HeroProps> = ({ children }: HeroProps) => (
  <s.Hero>
    <s.HeroInner>{children}</s.HeroInner>
  </s.Hero>
);

export default memo(Hero);
