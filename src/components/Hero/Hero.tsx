import React, { memo } from 'react';
import * as Styled from './styles';

interface IHeroProps {
  children?: React.ReactNode;
}

const SmHero: React.SFC<IHeroProps> = ({ children = <h1>Hello Hero</h1> }: IHeroProps) => {
  return (
    <Styled.Hero>
      <Styled.HeroInner>{children}</Styled.HeroInner>
    </Styled.Hero>
  );
};

export default memo(SmHero);
