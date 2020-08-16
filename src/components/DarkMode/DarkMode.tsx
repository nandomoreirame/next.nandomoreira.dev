import React, { memo } from 'react';
import * as S from './DarkMode.styles';
import { useDarkMode } from 'next-dark-mode';
import IconSun from './IconSun';
import IconMoon from './IconMoon';

const DarkMode: React.FC = () => {
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode();

  return (
    <S.DarkMode onClick={() => (darkModeActive ? switchToLightMode() : switchToDarkMode())}>
      {darkModeActive ? <IconSun /> : <IconMoon />}
    </S.DarkMode>
  );
};

export default memo(DarkMode);
