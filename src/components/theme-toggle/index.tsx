import { useColorMode } from '@chakra-ui/react';
import * as React from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';
import { Icon } from '@chakra-ui/react';
import { ToggleButton } from './styles';

type ThemeToogleProps = {
  fixed: boolean;
};

export const ThemeToogle: React.FC<ThemeToogleProps> = ({ fixed = false }: ThemeToogleProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ToggleButton onClick={toggleColorMode} fixed={fixed} light={colorMode === 'light'}>
      <Icon as={colorMode === 'light' ? BiMoon : BiSun} boxSize="36px" />
    </ToggleButton>
  );
};
