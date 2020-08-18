import React, { memo } from 'react';
import { useDarkMode } from 'next-dark-mode';
import { DarkMode } from '@nandomoreira/components';

const Footer: React.SFC = () => {
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode();

  return (
    <footer>
      <DarkMode
        darkModeActive={darkModeActive}
        switchToDarkMode={switchToDarkMode}
        switchToLightMode={switchToLightMode}
      />
    </footer>
  );
};

export default memo(Footer);
