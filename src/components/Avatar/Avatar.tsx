import React, { memo, Fragment } from 'react';
import * as S from './Avatar.styles';

interface AvatarProps {
  alt?: string;
  src?: string;
  width?: number;
}

const Avatar: React.FC<AvatarProps> = ({ alt, src, width = 240 }: AvatarProps) => (
  <Fragment>
    {src && alt && (
      <S.Figure width={width}>
        <S.Image alt={alt} height={width - 6} loading="lazy" src={src} width={width - 6} />
      </S.Figure>
    )}
  </Fragment>
);

export default memo(Avatar);
