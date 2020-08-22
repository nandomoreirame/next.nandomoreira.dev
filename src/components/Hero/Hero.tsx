import React, { memo } from 'react';
import * as S from './Hero.styles';

type HeroProps = {
  children: React.ReactNode;
  centered?: boolean;
};

const Hero: React.FC<HeroProps> = ({ children, centered = false }: HeroProps) => (
  <S.Hero>
    <S.HeroInner className={centered ? '--centered' : ''}>{children}</S.HeroInner>
  </S.Hero>
);

export default memo(Hero);
