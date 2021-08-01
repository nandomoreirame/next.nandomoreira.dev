import * as React from 'react';
import { Text, useColorModeValue } from '@chakra-ui/react';
import { ToggleButton } from './styles';

type MobileMenuButtonProps = VStack & {
  label?: string;
  icon?: React.ReactNode;
  fixed?: boolean;
  light?: boolean;
};

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  label,
  icon,
  light = false,
  fixed = false,
  ...rest
}: MobileMenuButtonProps) => {
  return (
    <ToggleButton
      as="button"
      spacing={0}
      rounded="md"
      px={6}
      {...rest}
      color={useColorModeValue('blue.600', 'blue.200')}
    >
      {icon}
      <Text fontSize="xs" fontWeight="500" color={useColorModeValue('gray.600', 'gray.200')}>
        {label}
      </Text>
    </ToggleButton>
  );
};
