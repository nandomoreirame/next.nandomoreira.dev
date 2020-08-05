import React, { memo, Fragment } from 'react';
import * as Styled from './Image.styles';

type ImageProps = {
  src?: string;
  alt?: string;
  size?: string | number;
};

const Image: React.FunctionComponent<ImageProps> = ({ src, alt = '', size = 100 }: ImageProps) => {
  return (
    <Fragment>
      {src && (
        <Styled.Figure>
          <source srcSet={require(`@nandomoreira/images/${src}?webp`)} type="image/webp" />
          <source
            srcSet={require(`@nandomoreira/images/${src}?resize&size=${size}`)}
            type="image/png"
          />
          <Styled.Image
            src={require(`@nandomoreira/images/${src}?resize&size=${size}`)}
            loading="lazy"
            alt={alt}
            width={size}
            height={size}
          />
        </Styled.Figure>
      )}
    </Fragment>
  );
};

export default memo(Image);
