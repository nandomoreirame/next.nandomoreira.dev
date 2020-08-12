import React, { memo } from 'react';
import * as Styled from './DarkMode.styles';
import { useDarkMode } from 'next-dark-mode';
import IconSun from './IconSun';
import IconMoon from './IconMoon';

const DarkMode: React.FunctionComponent = () => {
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode();

  const handleDarkMode = () => (darkModeActive ? switchToLightMode() : switchToDarkMode());

  return (
    <Styled.DarkMode onClick={handleDarkMode}>
      {darkModeActive ? <IconSun /> : <IconMoon />}
    </Styled.DarkMode>
  );
};

export default memo(DarkMode);
