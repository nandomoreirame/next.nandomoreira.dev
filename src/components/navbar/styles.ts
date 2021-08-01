import styled from '@emotion/styled';
import { VStack } from '@chakra-ui/react';

type ToggleButtonProps = {
  fixed?: boolean;
  light?: boolean;
};

export const ToggleButton = styled(VStack)<ToggleButtonProps>`
  /* bottom: ${({ fixed }) => (fixed ? '2rem' : 'auto')};
  color: ${({ light }) => (light ? '#272643' : '#eabf57')};
  background-color: ${({ light }) => (light ? '#edf2f7' : 'rgba(255, 255, 255, 0.08)')};
  cursor: pointer;
  position: ${({ fixed }) => (fixed ? 'fixed' : 'relative')};
  right: ${({ fixed }) => (fixed ? '2rem' : 'auto')}; */
`;
