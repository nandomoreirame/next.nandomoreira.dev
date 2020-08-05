import React, { memo } from 'react';
import * as Styled from './Hero.styles';
import { useDarkMode } from 'next-dark-mode';

type HeroProps = {
  children: React.ReactNode;
};

const Hero: React.FunctionComponent<HeroProps> = ({ children }: HeroProps) => {
  const { darkModeActive } = useDarkMode();

  return (
    <Styled.Hero darkModeActive={darkModeActive}>
      <Styled.HeroInner darkModeActive={darkModeActive}>{children}</Styled.HeroInner>
    </Styled.Hero>
  );
};

export default memo(Hero);
