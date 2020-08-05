import styled from 'styled-components';
// import media from 'styled-media-query';
import { FigureProps, ImageProps } from '@nandomoreira/@types';

export const Figure = styled.figure<FigureProps>`
  align-items: center;
  background-color: ${({ darkModeActive }) => (darkModeActive ? '#E5E5E5' : '#2C698D')};
  border-radius: 50%;
  display: flex;
  flex: ${(p) => `${p?.size - 50}px`} 0 0;
  height: ${(p) => `${p?.size - 50}px`};
  justify-content: center;
  width: ${(p) => `${p?.size - 50}px`};
`;

export const Image = styled.img<ImageProps>`
  border-radius: 50%;
  border: 2px solid ${({ darkModeActive }) => (darkModeActive ? '#2C698D' : '#F6FAFD')};
  display: inline-block;
  height: ${({ height }) => `${Number(height) - 50}px`};
  width: ${({ width }) => `${Number(width) - 50}px`};
`;
