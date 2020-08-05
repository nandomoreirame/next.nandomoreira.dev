import React, { memo } from 'react';
import * as Styled from './Logo.styles';
import { useDarkMode } from 'next-dark-mode';

type LogoProps = {
  href?: string;
};

const Logo: React.FunctionComponent<LogoProps> = ({ href }: LogoProps) => {
  const { darkModeActive } = useDarkMode();

  return (
    <Styled.Logo href={href}>
      <svg width="50" height="45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M43.247 0v45H32.662L12.597 21.021V45H0V0h10.584L30.65 23.979V0h12.598z"
          fill={darkModeActive ? '#E5E5E5' : '#272643'}
        />
        <rect
          x="37.013"
          y="32.143"
          width="12.987"
          height="12.857"
          rx="6.429"
          fill={darkModeActive ? '#F6FAFD' : '#2C698D'}
        />
      </svg>
    </Styled.Logo>
  );
};

export default memo(Logo);
