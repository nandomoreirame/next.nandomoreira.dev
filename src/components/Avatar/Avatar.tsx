import React, { memo } from 'react';
import { useDarkMode } from 'next-dark-mode';
import * as Styled from './Avatar.styles';

interface AvatarProps {
  src?: string;
  size?: number;
}

const Avatar: React.FunctionComponent<AvatarProps> = ({ src, size = 240 }: AvatarProps) => {
  const { darkModeActive } = useDarkMode();

  return (
    <Styled.Figure size={size} darkModeActive={darkModeActive}>
      {src && (
        <Styled.Image
          alt="Foto de Fernando Moreira Costa"
          darkModeActive={darkModeActive}
          loading="lazy"
          width={size - 6}
          height={size - 6}
          src={src}
        />
      )}
    </Styled.Figure>
  );
};

export default memo(Avatar);
