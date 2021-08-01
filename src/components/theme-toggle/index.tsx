import { useColorMode, ScaleFade } from '@chakra-ui/react';
import * as React from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';
import { Icon } from '@chakra-ui/react';
import useSound from 'use-sound';
import { MobileMenuButton } from '@components';

type ThemeToogleProps = {
  fixed: boolean;
};

export const ThemeToogle: React.FC<ThemeToogleProps> = ({ fixed = false }: ThemeToogleProps) => {
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
      label={colorMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
      icon={
        colorMode === 'dark' ? (
          <ScaleFade in>
            <Icon as={BiSun} boxSize="36px" />
          </ScaleFade>
        ) : (
          <ScaleFade in>
            <Icon as={BiMoon} boxSize="36px" />
          </ScaleFade>
        )
      }
      onClick={handleClick}
      fixed={fixed}
      light={colorMode === 'light'}
    />
  );
};
