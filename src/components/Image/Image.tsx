import React, { memo, Fragment } from 'react';
import * as S from './Image.styles';

type Image = {
  src?: string;
  alt?: string;
  size?: string | number;
};

const Image: React.FC<Image> = ({ src, alt = '', size = 100 }: Image) => {
  return (
    <Fragment>
      {src && (
        <S.Figure>
          <source srcSet={require(`@nandomoreira/images/${src}?webp`)} type="image/webp" />
          <source
            srcSet={require(`@nandomoreira/images/${src}?resize&size=${size}`)}
            type="image/png"
          />
          <S.Image
            src={require(`@nandomoreira/images/${src}?resize&size=${size}`)}
            loading="lazy"
            alt={alt}
            width={size}
            height={size}
          />
        </S.Figure>
      )}
    </Fragment>
  );
};

export default memo(Image);
