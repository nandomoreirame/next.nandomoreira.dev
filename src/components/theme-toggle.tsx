import * as React from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';
import { useColorMode, ScaleFade, Box, useColorModeValue } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import useSound from 'use-sound';
import { MobileMenuButton } from '@components';

export const ThemeToogle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [play] = useSound('/lightswitch.mp3', {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  });

  const handleClick = () => {
    toggleColorMode();
    colorMode === 'dark' ? play({ id: 'on' }) : play({ id: 'off' });
  };

  return (
    <MobileMenuButton
      icon={
        colorMode === 'dark' ? (
          <ScaleFade initialScale={0.9} in>
            <Icon as={BiSun} boxSize="36px" />
          </ScaleFade>
        ) : (
          <ScaleFade initialScale={0.9} in>
            <Icon as={BiMoon} boxSize="36px" />
          </ScaleFade>
        )
      }
      onClick={handleClick}
    />
  );
};
