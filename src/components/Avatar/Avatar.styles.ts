import styled from 'styled-components';
// import media from 'styled-media-query';
import { FigureProps, ImageProps } from '@nandomoreira/@types';

export const Figure = styled.figure<FigureProps>`
  align-items: center;
  background-color: ${({ theme }) => theme?.backgroundColor};
  border-radius: 50%;
  display: flex;
  flex: ${(props) => `${props?.width}px`} 0 0;
  height: ${(props) => `${props?.width}px`};
  justify-content: center;
  width: ${(props) => `${props?.width}px`};
`;

export const Image = styled.img<ImageProps>`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme?.borderColor};
  display: inline-block;
  height: ${(props) => `${props?.height}px`};
  width: ${(props) => `${props?.width}px`};
`;
