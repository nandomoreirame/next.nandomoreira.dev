import * as React from 'react';
import { Button, ButtonProps, Text, useColorModeValue } from '@chakra-ui/react';

interface MobileMenuButtonProps extends ButtonProps {
  label?: string;
  icon?: React.ReactNode;
}

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  label,
  icon,
  ...rest
}: MobileMenuButtonProps) => {
  const labelColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Button variant="ghost" size="md" rounded="md" px={3} py={6} {...rest}>
      {icon}
      {label && (
        <Text fontSize="xs" fontWeight="500" color={labelColor}>
          {label}
        </Text>
      )}
    </Button>
  );
};
