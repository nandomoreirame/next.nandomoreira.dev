import React, { memo } from 'react';
import * as S from './DarkMode.styles';
import IconSun from './IconSun';
import IconMoon from './IconMoon';

type DarkModeProps = {
  darkModeActive?: boolean;
  switchToDarkMode: () => void;
  switchToLightMode: () => void;
};

const DarkMode: React.FC<DarkModeProps> = ({
  darkModeActive = true,
  switchToDarkMode,
  switchToLightMode,
}: DarkModeProps) => {
  return (
    <S.DarkMode onClick={() => (darkModeActive ? switchToLightMode() : switchToDarkMode())}>
      {darkModeActive ? <IconSun /> : <IconMoon />}
    </S.DarkMode>
  );
};

export default memo(DarkMode);
