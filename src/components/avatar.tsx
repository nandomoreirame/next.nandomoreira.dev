import * as React from 'react';
import { useColorModeValue, AvatarBadge, Tooltip, Avatar as ChakraAvatar } from '@chakra-ui/react';
import avatar from '@images/avatar.png';

export const Avatar: React.FC = () => {
  const [available, setAvailable] = React.useState(false);

  React.useEffect(() => {
    setAvailable(false);
  }, []);

  const availableBg = available ? 'green.500' : 'red.500';
  const availableText = available
    ? 'Disponível para novos projetos'
    : 'Não disponível para novos projetos';

  return (
    <ChakraAvatar
      size={'3xl'}
      name="Fernando Moreira"
      src={avatar?.src}
      bg={useColorModeValue('gray.100', 'gray.900')}
      borderColor={useColorModeValue('gray.400', 'gray.100')}
      borderWidth="2px"
      display={{ base: 'inline-block', md: 'flex' }}
      w={{ base: 140, lg: 220, md: 180 }}
      p={2}
    >
      <Tooltip label={availableText} color="white" placement="top" bg={availableBg} hasArrow>
        <AvatarBadge
          boxSize="1.2rem"
          bg={availableBg}
          borderColor={useColorModeValue('gray.100', 'gray.900')}
          cursor="pointer"
          right={{ base: 4, md: '35px' }}
          bottom={{ base: 4, md: '15px' }}
        />
      </Tooltip>
    </ChakraAvatar>
  );
};
